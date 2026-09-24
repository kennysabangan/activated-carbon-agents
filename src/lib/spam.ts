import type { ContactField } from "@/app/contact-state";

type Lead = Record<ContactField, string>;

export type SpamVerdict = {
  score: number;
  reasons: string[];
  /** Score reached the threshold: keep it out of the client's inbox. */
  isSpam: boolean;
  /**
   * A combination no human produces, so the submission can be dropped
   * without review. Deliberately NOT derived from the score: a high score
   * can be built from weak signals stacking up, and a silent drop of a real
   * enquiry is the one failure this filter must never make.
   */
  isCertain: boolean;
};

/** At or above this, the lead is quarantined away from the client's inbox. */
export const SPAM_THRESHOLD = 50;

/* Bots fill every field faster than a person can type. Tiered: under 1.5s is
   not physically human even with autofill, so it stands alone; 1.5-3.5s is
   suspicious but needs corroboration. */
const IMPOSSIBLE_FILL_MS = 1500;
const FAST_FILL_MS = 3500;

const VOWELS = /[aeiouy]/gi;
const URL_RE = /(https?:\/\/|www\.|\.(com|net|ru|xyz|top|buzz|click|shop)\b)/i;

function vowelRatio(s: string) {
  const letters = s.replace(/[^a-z]/gi, "");
  if (letters.length === 0) return 1;
  return (letters.match(VOWELS)?.length ?? 0) / letters.length;
}

/** Longest run of consecutive consonants — "Jjcwuhf" scores 4. */
function longestConsonantRun(s: string) {
  let best = 0;
  let run = 0;
  for (const ch of s.toLowerCase()) {
    if (/[a-z]/.test(ch) && !/[aeiouy]/.test(ch)) {
      run += 1;
      if (run > best) best = run;
    } else {
      run = 0;
    }
  }
  return best;
}

/** Case flipping inside a word, as in "rWiPUmFMadQNVpsSOX". */
function hasRandomCasing(s: string) {
  for (const word of s.split(/\s+/)) {
    if (word.length < 6) continue;
    const letters = word.replace(/[^a-z]/gi, "");
    if (letters.length < 6) continue;
    let flips = 0;
    for (let i = 1; i < letters.length; i++) {
      const a = letters[i - 1] === letters[i - 1].toUpperCase();
      const b = letters[i] === letters[i].toUpperCase();
      if (a !== b) flips += 1;
    }
    if (flips >= 4) return true;
  }
  return false;
}

/**
 * Scores a submission for spam. Deliberately weighted so that no single
 * content heuristic reaches the threshold on its own — a real enquiry that
 * happens to be terse, or from a client with an unusual name, should never be
 * quarantined by one content signal alone. The exceptions are behavioural,
 * not textual: a human never fills a hidden field, and never completes five
 * fields in under 1.5 seconds.
 */
export function scoreSpam(
  values: Lead,
  opts: { honeypot: string; elapsedMs: number | null }
): SpamVerdict {
  const reasons: string[] = [];
  let score = 0;
  let noSpaces = false;
  let randomCasing = false;

  const add = (points: number, reason: string) => {
    score += points;
    reasons.push(`${reason} (+${points})`);
  };

  if (opts.honeypot.trim()) {
    add(100, "honeypot filled");
  }

  if (opts.elapsedMs !== null) {
    if (opts.elapsedMs < IMPOSSIBLE_FILL_MS) {
      add(60, `submitted in ${opts.elapsedMs}ms`);
    } else if (opts.elapsedMs < FAST_FILL_MS) {
      add(30, `submitted in ${opts.elapsedMs}ms`);
    }
  }

  const message = values.message.trim();
  // A multi-character message with no whitespace at all is a token, not prose.
  if (message.length > 8 && !/\s/.test(message)) {
    noSpaces = true;
    add(40, "message has no spaces");
  }
  if (message.length > 8 && vowelRatio(message) < 0.22) {
    add(25, "message vowel ratio low");
  }
  if (hasRandomCasing(message)) {
    randomCasing = true;
    add(25, "message has random casing");
  }
  /* Weighted to stand alone: an unsolicited link in a first enquiry to an
     industrial supplier is overwhelmingly SEO spam. A genuine sender who
     pastes a spec sheet URL is quarantined, not lost — the agency still
     receives it and can forward. */
  if (URL_RE.test(message)) {
    add(50, "message contains a link");
  }

  const name = `${values.firstName} ${values.lastName}`.trim();
  if (name.length > 4 && vowelRatio(name) < 0.3) {
    add(20, "name vowel ratio low");
  }
  if (longestConsonantRun(name) >= 4) {
    add(20, "name has a long consonant run");
  }
  if (hasRandomCasing(name)) {
    add(20, "name has random casing");
  }

  // Gmail ignores dots, so scripted signups scatter them to mint addresses.
  const local = values.email.split("@")[0] ?? "";
  const dots = (local.match(/\./g) ?? []).length;
  if (dots >= 4) {
    add(25, `email local part has ${dots} dots`);
  }

  /* Certain-bot signatures. Each is a conjunction of independent signals:
     - A message that is one unbroken token AND flips case at random, like
       "KRwkvGlgwqxQJyHdOyr". Either alone has an innocent explanation (a
       one-word enquiry; a product code); both together is how this bot
       family writes, and no person does.
     - The honeypot AND an impossible fill time. The honeypot alone is not
       enough — a browser extension that autofills hidden fields would
       otherwise get a real person silently dropped. */
  const honeypotFilled = Boolean(opts.honeypot.trim());
  const impossiblyFast = opts.elapsedMs !== null && opts.elapsedMs < IMPOSSIBLE_FILL_MS;
  const isCertain = (noSpaces && randomCasing) || (honeypotFilled && impossiblyFast);

  return { score, reasons, isSpam: score >= SPAM_THRESHOLD || isCertain, isCertain };
}
