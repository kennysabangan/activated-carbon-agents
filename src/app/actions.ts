"use server";

import { Resend } from "resend";
import {
  CONTACT_FIELDS,
  initialContactState,
  type ContactField,
  type ContactState,
} from "./contact-state";
import {
  internalLeadHtml,
  internalLeadSubject,
  internalLeadText,
} from "@/emails/internal-lead";
import { scoreSpam } from "@/lib/spam";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Lead notifications go to the client, blind-copied to the agency.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "kim@activatedcarbonagents.com";
const BCC_EMAIL = process.env.CONTACT_BCC_EMAIL ?? "hello@scalesolving.com";
// Must be on a domain verified in Resend, or the API rejects every
// recipient other than the account owner.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ??
  "Activated Carbon Agents <leads@activatedcarbonagents.com>";

const FALLBACK_CONTACT =
  "Please email kim@activatedcarbonagents.com or call (855) 934-3376.";

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const values = Object.fromEntries(
    CONTACT_FIELDS.map((f) => [f, String(formData.get(f) ?? "").trim()])
  ) as Record<ContactField, string>;

  const errors: Partial<Record<ContactField, string>> = {};
  if (!values.firstName) errors.firstName = "Please enter your first name.";
  if (!values.lastName) errors.lastName = "Please enter your last name.";
  if (!values.phone) errors.phone = "Please enter a phone number.";
  if (!values.email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(values.email))
    errors.email = "Please enter a valid email address.";
  if (!values.message) errors.message = "Please enter a message.";

  const terms = Boolean(formData.get("terms"));
  if (!terms) {
    return {
      status: "error",
      message: "Please agree to the terms & conditions to continue.",
      errors,
      values,
      terms,
    };
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      errors,
      values,
      terms,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form cannot send.");
    return {
      status: "error",
      message: `This form isn't connected yet. ${FALLBACK_CONTACT}`,
      errors: {},
      values,
      terms,
    };
  }

  /* Spam gate. Suspected spam is quarantined to the agency rather than
     dropped: a false positive costs a review, not a lost enquiry. Either way
     it never reaches the client's inbox. */
  const renderedAt = Number(formData.get("renderedAt"));
  const verdict = scoreSpam(values, {
    honeypot: String(formData.get("companyWebsite") ?? ""),
    elapsedMs: Number.isFinite(renderedAt) && renderedAt > 0 ? Date.now() - renderedAt : null,
  });

  const recipients = verdict.isSpam
    ? [BCC_EMAIL].filter(Boolean)
    : [TO_EMAIL];
  const bcc = verdict.isSpam ? [] : [BCC_EMAIL].filter(Boolean);

  /* Three tiers:
       certain bot -> dropped silently, nobody is emailed
       suspected   -> quarantined to the agency for review
       clean       -> delivered to the client, agency BCC'd
     The bot is told it succeeded either way, so it learns nothing. */
  if (verdict.isCertain) {
    console.warn(
      `Dropped certain spam (score ${verdict.score}): ${verdict.reasons.join(", ")}`
    );
    return {
      status: "success",
      message:
        "Thanks for reaching out. One of our representatives will get back to you shortly.",
      errors: {},
      values: initialContactState.values,
      terms: false,
    };
  }

  if (verdict.isSpam) {
    console.warn(
      `Quarantined suspected spam (score ${verdict.score}): ${verdict.reasons.join(", ")}`
    );
    // Nowhere to quarantine to, so drop it rather than deliver to the client.
    if (recipients.length === 0) {
      return {
        status: "success",
        message:
          "Thanks for reaching out. One of our representatives will get back to you shortly.",
        errors: {},
        values: initialContactState.values,
        terms: false,
      };
    }
  }

  const receivedAt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Los_Angeles",
  }).format(new Date());

  try {
    const { data, error } = await new Resend(apiKey).emails.send({
      from: FROM_EMAIL,
      to: recipients,
      ...(bcc.length ? { bcc } : {}),
      // Replying in the inbox goes straight back to the enquirer.
      replyTo: values.email,
      subject: verdict.isSpam
        ? `[Spam ${verdict.score}] ${internalLeadSubject(values)}`
        : internalLeadSubject(values),
      text: internalLeadText(values, `${receivedAt} PT`),
      html: internalLeadHtml(values, `${receivedAt} PT`),
    });

    if (error) throw new Error(`${error.name}: ${error.message}`);
    // Message id makes a delivery traceable in the Resend dashboard.
    console.info(
      `Lead email queued (${data?.id}) for ${recipients.join(", ")}` +
        (bcc.length ? ` bcc ${bcc.join(", ")}` : "") +
        (verdict.isSpam ? " [quarantined]" : "")
    );
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return {
      status: "error",
      message: `Sorry — we couldn't send your message. ${FALLBACK_CONTACT}`,
      errors: {},
      values,
      terms,
    };
  }

  return {
    status: "success",
    message:
      "Thanks for reaching out. One of our representatives will get back to you shortly.",
    errors: {},
    values: initialContactState.values,
    terms: false,
  };
}
