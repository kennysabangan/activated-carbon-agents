# Activated Carbon Agents

A Next.js clone of the Activated Carbon Agents site.

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in the values below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form email (Resend)

The contact form is a Server Action (`src/app/actions.ts`) that sends an
internal lead notification through [Resend](https://resend.com). It reads
these variables, all set in `.env.local` locally and in your host's
environment in production:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from <https://resend.com/api-keys> |
| `CONTACT_TO_EMAIL` | Primary recipient of lead notifications |
| `CONTACT_BCC_EMAIL` | Blind-copied on every lead; leave empty for none |
| `CONTACT_FROM_EMAIL` | Sender address — see the note below |
| `ALTCHA_HMAC_KEY` | Secret for the spam check below; any long random string |

`.env.local` is git-ignored, so it never leaves your machine — it does **not**
deploy. Production runs on Vercel (project `activated-carbon-agents`, team
`scalesolving`), where all five variables are set for the Production and
Preview environments. Changing a value there needs a redeploy to take effect;
Vercel does not restart running deployments when a variable changes.

### Sender domain

`activatedcarbonagents.com` is verified in Resend, and `CONTACT_FROM_EMAIL`
sends as `leads@activatedcarbonagents.com`. Keep the sender on a verified
domain: Resend's shared `onboarding@resend.dev` address is test-only and
delivers solely to the Resend account owner, rejecting every other recipient.

If the form ever reports that it cannot send, check the server log — the
Resend error is logged verbatim, and successful sends log the message id so
the delivery can be traced in the Resend dashboard.

### Spam protection

Every submission must carry an invisible proof-of-work from
[ALTCHA](https://altcha.org), self-hosted and free: `/api/altcha` issues a
signed challenge, the browser solves it in the background once the visitor
focuses a field (well under a second), and the Server Action verifies it
before anything is emailed. There is no widget or puzzle. Each proof is
single-use and expires after an hour. Scripted submissions, which don't run
JavaScript, are rejected before any email is sent. A real visitor without
JavaScript is shown the phone number and email address instead.

Submissions that pass are then scored by `src/lib/spam.ts`. Obvious bots are
dropped silently. Suspected spam goes only to `CONTACT_BCC_EMAIL`, with
`[Spam nn]` in the subject, and never reaches the client.

If `ALTCHA_HMAC_KEY` is unset, the proof-of-work check is skipped (with a
warning in the log) rather than blocking real enquiries. To rotate the key,
change it in Vercel and redeploy.

## Notes

- `public/videos/palms.mp4` is not referenced by any section yet.
