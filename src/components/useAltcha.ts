"use client";

import { useCallback, useRef } from "react";
import { solveChallenge, type Challenge } from "altcha-lib";
import { deriveKey } from "altcha-lib/algorithms/web/pbkdf2";

type Solved = { payload: string; expiresAt: number | null };
/* "disabled": the server has no secret configured and will not ask for a
   proof. null: solving failed; the server will report the proof missing and
   the visitor is shown the phone number and email instead. */
type Outcome = Solved | "disabled" | null;

/** Re-solve if the current proof would lapse within this many seconds. */
const FRESH_FOR_S = 60;

async function fetchAndSolve(): Promise<Outcome> {
  const res = await fetch("/api/altcha", { cache: "no-store" });
  if (res.status === 204) return "disabled";
  if (!res.ok) return null;
  const challenge: Challenge = await res.json();
  const solution = await solveChallenge({ challenge, deriveKey, timeout: 30_000 });
  if (!solution) return null;
  return {
    payload: JSON.stringify({ challenge, solution }),
    expiresAt: challenge.parameters.expiresAt ?? null,
  };
}

function isFresh(o: Outcome) {
  if (!o || o === "disabled") return false;
  return o.expiresAt === null || o.expiresAt - Date.now() / 1000 > FRESH_FOR_S;
}

/**
 * Invisible proof-of-work for the contact form. Nothing is rendered: solving
 * starts in the background the first time the visitor focuses a field, so it
 * has long finished by the time they press Send.
 */
export function useAltcha() {
  const inflight = useRef<Promise<Outcome> | null>(null);

  const start = () => fetchAndSolve().catch((): Outcome => null);

  /** Begin solving in the background. Safe to call repeatedly. */
  const warm = useCallback(() => {
    if (!inflight.current) inflight.current = start();
  }, []);

  /** A payload valid for at least another minute, or "" if unavailable. */
  const ensure = useCallback(async (): Promise<string> => {
    if (!inflight.current) inflight.current = start();
    let outcome = await inflight.current;
    if (outcome !== "disabled" && !isFresh(outcome)) {
      inflight.current = start();
      outcome = await inflight.current;
    }
    return outcome && outcome !== "disabled" ? outcome.payload : "";
  }, []);

  /** Proofs are single-use: discard after a submission so the next re-solves. */
  const reset = useCallback(() => {
    inflight.current = null;
  }, []);

  return { warm, ensure, reset };
}
