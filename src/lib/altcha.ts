import "server-only";
import {
  CappedMap,
  createChallenge,
  randomInt,
  verifySolution,
  type Challenge,
  type Solution,
} from "altcha-lib";
import { deriveKey } from "altcha-lib/algorithms/pbkdf2";

/*
 * Self-hosted proof-of-work check (ALTCHA, MIT). No third party: the
 * challenge is created and verified here, signed with a secret we generate.
 *
 * Difficulty is deliberately light. The bots hitting this form do not run
 * JavaScript at all (their submissions arrive with the browser-stamped
 * timestamp empty), so what stops them is having to execute JS and return a
 * signed, expiring answer — not the amount of work. The library's README
 * example settings take 15-20s to solve, which is unusable for an invisible
 * check; these solve in well under a second.
 */
const ALGORITHM = "PBKDF2/SHA-256";
const COST = 1000;
const COUNTER_MIN = 200;
const COUNTER_MAX = 1000;
/* Long enough for someone to write a careful enquiry. The client re-solves
   automatically if a challenge is about to lapse before they press Send. */
const TTL_SECONDS = 60 * 60;

/* A solved payload is single-use. Serverless instances do not share memory,
   so this only guards within an instance — enough for this threat model. */
const used = new CappedMap<string, true>({ maxSize: 5000 });

function secret() {
  return process.env.ALTCHA_HMAC_KEY?.trim() || null;
}

export function altchaEnabled() {
  return secret() !== null;
}

export async function createFormChallenge(): Promise<Challenge> {
  const key = secret();
  if (!key) throw new Error("ALTCHA_HMAC_KEY is not set");
  return createChallenge({
    algorithm: ALGORITHM,
    cost: COST,
    // Note the argument order: randomInt(max, min). The README example has it reversed.
    counter: randomInt(COUNTER_MAX, COUNTER_MIN),
    deriveKey,
    hmacSignatureSecret: key,
    expiresAt: Math.floor(Date.now() / 1000) + TTL_SECONDS,
  });
}

export type AltchaResult = "ok" | "disabled" | "missing" | "invalid" | "expired" | "replayed";

export async function verifyFormSolution(raw: FormDataEntryValue | null): Promise<AltchaResult> {
  const key = secret();
  /* Fail open: a missing secret is a configuration slip, and it must never
     cost the client a real lead. The content spam filter still runs. */
  if (!key) return "disabled";

  if (typeof raw !== "string" || raw.trim() === "") return "missing";

  let challenge: Challenge;
  let solution: Solution;
  try {
    ({ challenge, solution } = JSON.parse(raw));
    if (!challenge?.parameters || !solution) return "invalid";
  } catch {
    return "invalid";
  }

  const signature = challenge.signature ?? "";
  if (signature && used.has(signature)) return "replayed";

  try {
    const result = await verifySolution({ challenge, solution, deriveKey, hmacSignatureSecret: key });
    if (result.expired) return "expired";
    if (!result.verified) return "invalid";
  } catch {
    return "invalid";
  }

  used.set(signature, true);
  return "ok";
}
