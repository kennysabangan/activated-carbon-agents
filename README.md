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

`.env.local` is git-ignored, so it never leaves your machine. A deploy needs
the same variables set in the hosting platform's env settings.

### Sender domain

`activatedcarbonagents.com` is verified in Resend, and `CONTACT_FROM_EMAIL`
sends as `leads@activatedcarbonagents.com`. Keep the sender on a verified
domain: Resend's shared `onboarding@resend.dev` address is test-only and
delivers solely to the Resend account owner, rejecting every other recipient.

If the form ever reports that it cannot send, check the server log — the
Resend error is logged verbatim, and successful sends log the message id so
the delivery can be traced in the Resend dashboard.

## Notes

- `public/videos/palms.mp4` is not referenced by any section yet.
