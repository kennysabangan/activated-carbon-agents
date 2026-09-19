// Shared shape for the contact form. Kept out of actions.ts because a
// "use server" module may only export async functions.

export const CONTACT_FIELDS = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "message",
] as const;

export type ContactField = (typeof CONTACT_FIELDS)[number];

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<ContactField, string>>;
  values: Record<ContactField, string>;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
  errors: {},
  values: { firstName: "", lastName: "", phone: "", email: "", message: "" },
};
