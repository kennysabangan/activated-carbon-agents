"use server";

import {
  CONTACT_FIELDS,
  initialContactState,
  type ContactField,
  type ContactState,
} from "./contact-state";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

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

  // Where the lead actually goes. Set CONTACT_WEBHOOK_URL to the GoHighLevel
  // (or other CRM) inbound webhook for this form. Without it there is nowhere
  // to deliver the submission, so we say so rather than reporting a success
  // that would silently drop the enquiry.
  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    return {
      status: "error",
      message:
        "This form isn't connected yet. Please email kim@activatedcarbonagents.com or call (855) 934-3376 and we'll get right back to you.",
      errors: {},
      values,
    };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error(`Upstream responded ${res.status}`);
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return {
      status: "error",
      message:
        "Sorry — we couldn't send your message. Please email kim@activatedcarbonagents.com or call (855) 934-3376.",
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
