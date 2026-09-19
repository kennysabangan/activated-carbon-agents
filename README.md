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
three variables, all set in `.env.local` locally and in your host's
environment in production:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from <https://resend.com/api-keys> |
| `CONTACT_TO_EMAIL` | Where lead notifications are delivered |
| `CONTACT_FROM_EMAIL` | Sender address — see the note below |

`.env.local` is git-ignored, so it never leaves your machine. A deploy needs
the same three variables set in the hosting platform's env settings.

### You must verify a domain before this works

Resend's shared `onboarding@resend.dev` sender is **test-only**: it will
deliver *only* to the email address that owns the Resend account, and
rejects every other recipient with:

> You can only send testing emails to your own email address. To send emails
> to other recipients, please verify a domain at resend.com/domains, and
> change the `from` address to an email using this domain.

So before leads can reach `CONTACT_TO_EMAIL`:

1. Verify a domain at <https://resend.com/domains> (add the DNS records it
   gives you).
2. Set `CONTACT_FROM_EMAIL` to an address on that domain, e.g.
   `Activated Carbon Agents <leads@activatedcarbonagents.com>`.

Until then the form shows the visitor a fallback pointing at the published
phone number and email rather than reporting a success it cannot deliver.
The underlying Resend error is logged server-side.

## Notes

- `public/videos/palms.mp4` is not referenced by any section yet.
