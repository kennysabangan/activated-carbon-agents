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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Internal lead notifications go to the agency inbox.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hello@scalesolving.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ??
  "Activated Carbon Agents <onboarding@resend.dev>";

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

  if (!formData.get("terms")) {
    return {
      status: "error",
      message: "Please agree to the terms & conditions to continue.",
      errors,
      values,
    };
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      errors,
      values,
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
    };
  }

  const receivedAt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Los_Angeles",
  }).format(new Date());

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      // Replying in the inbox goes straight back to the enquirer.
      replyTo: values.email,
      subject: internalLeadSubject(values),
      text: internalLeadText(values, `${receivedAt} PT`),
      html: internalLeadHtml(values, `${receivedAt} PT`),
    });

    if (error) throw new Error(`${error.name}: ${error.message}`);
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return {
      status: "error",
      message: `Sorry — we couldn't send your message. ${FALLBACK_CONTACT}`,
      errors: {},
      values,
    };
  }

  return {
    status: "success",
    message:
      "Thanks for reaching out. One of our representatives will get back to you shortly.",
    errors: {},
    values: initialContactState.values,
  };
}
