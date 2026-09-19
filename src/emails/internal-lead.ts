import type { ContactField } from "@/app/contact-state";

type Lead = Record<ContactField, string>;

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const BRAND = "#a8432a";
const INK = "#14161c";
const MUTED = "#5d6169";
const LINE = "#e2ded7";
const FIELD_LABEL_WIDTH = "104px";

function row(label: string, value: string, href?: string) {
  const shown = escapeHtml(value);
  const cell = href
    ? `<a href="${href}" style="color:${BRAND};text-decoration:none">${shown}</a>`
    : shown;

  return `
    <tr>
      <td style="padding:8px 0;width:${FIELD_LABEL_WIDTH};vertical-align:top;
                 font:600 13px/1.5 Helvetica,Arial,sans-serif;color:${MUTED};
                 letter-spacing:.4px;text-transform:uppercase">${label}</td>
      <td style="padding:8px 0;font:400 16px/1.5 Helvetica,Arial,sans-serif;
                 color:${INK}">${cell}</td>
    </tr>`;
}

export function internalLeadSubject(lead: Lead) {
  return `New website lead — ${lead.firstName} ${lead.lastName}`;
}

export function internalLeadText(lead: Lead, receivedAt: string) {
  return [
    "NEW WEBSITE LEAD — activatedcarbonagents.com",
    "",
    `Name:     ${lead.firstName} ${lead.lastName}`,
    `Email:    ${lead.email}`,
    `Phone:    ${lead.phone}`,
    `Received: ${receivedAt}`,
    "",
    "MESSAGE",
    "-------",
    lead.message,
    "",
    "Reply directly to this email to reach the enquirer.",
  ].join("\n");
}

export function internalLeadHtml(lead: Lead, receivedAt: string) {
  const name = `${lead.firstName} ${lead.lastName}`;

  return `<!doctype html>
<html lang="en">
<body style="margin:0;padding:24px;background:#eeece8">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0"
         style="max-width:600px;margin:0 auto;background:#fff;border:1px solid ${LINE};
                border-radius:12px;overflow:hidden">
    <tr>
      <td style="background:${INK};padding:20px 28px">
        <p style="margin:0;font:600 12px/1.4 Helvetica,Arial,sans-serif;
                  letter-spacing:1.6px;text-transform:uppercase;color:#b9bdc4">
          Activated Carbon Agents
        </p>
        <p style="margin:4px 0 0;font:600 20px/1.3 Helvetica,Arial,sans-serif;color:#fff">
          New website lead
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:28px">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          ${row("Name", name)}
          ${row("Email", lead.email, `mailto:${encodeURIComponent(lead.email)}`)}
          ${row("Phone", lead.phone, `tel:${lead.phone.replace(/[^\d+]/g, "")}`)}
          ${row("Received", receivedAt)}
        </table>

        <p style="margin:24px 0 8px;font:600 13px/1.5 Helvetica,Arial,sans-serif;
                  color:${MUTED};letter-spacing:.4px;text-transform:uppercase">Message</p>
        <div style="padding:16px 18px;background:#f6f4f1;border-left:3px solid ${BRAND};
                    border-radius:4px;font:400 16px/1.6 Helvetica,Arial,sans-serif;
                    color:${INK};white-space:pre-wrap">${escapeHtml(lead.message)}</div>

        <p style="margin:24px 0 0;font:400 14px/1.6 Helvetica,Arial,sans-serif;color:${MUTED}">
          Reply directly to this email to reach ${escapeHtml(lead.firstName)}.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:14px 28px;border-top:1px solid ${LINE};background:#faf9f7">
        <p style="margin:0;font:400 12px/1.5 Helvetica,Arial,sans-serif;color:#8b8f96">
          Sent automatically from the contact form at activatedcarbonagents.com
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
