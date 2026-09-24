import { altchaEnabled, createFormChallenge } from "@/lib/altcha";

/* Every visitor needs a fresh challenge with its own expiry, so this must
   never be prerendered or cached. Route handlers are uncached by default,
   but a cached challenge would fail silently — so be explicit. */
export const dynamic = "force-dynamic";

export async function GET() {
  if (!altchaEnabled()) {
    // Tells the form to skip the check; the server will not demand one.
    return new Response(null, { status: 204, headers: { "Cache-Control": "no-store" } });
  }
  const challenge = await createFormChallenge();
  return Response.json(challenge, { headers: { "Cache-Control": "no-store" } });
}
