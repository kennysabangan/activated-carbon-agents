"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";
import { initialContactState } from "@/app/contact-state";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialContactState
  );

  if (state.status === "success") {
    return (
      <p className="form-status form-status-success" role="status">
        {state.message}
      </p>
    );
  }

  return (
    <form className="contact-form" action={formAction}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required
            defaultValue={state.values.firstName}
            aria-invalid={state.errors.firstName ? true : undefined}
            aria-describedby={
              state.errors.firstName ? "firstName-error" : undefined
            }
          />
          {state.errors.firstName && (
            <p className="field-error" id="firstName-error">
              {state.errors.firstName}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required
            defaultValue={state.values.lastName}
            aria-invalid={state.errors.lastName ? true : undefined}
            aria-describedby={
              state.errors.lastName ? "lastName-error" : undefined
            }
          />
          {state.errors.lastName && (
            <p className="field-error" id="lastName-error">
              {state.errors.lastName}
            </p>
          )}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone <span className="req">*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            required
            defaultValue={state.values.phone}
            aria-invalid={state.errors.phone ? true : undefined}
            aria-describedby={state.errors.phone ? "phone-error" : undefined}
          />
          {state.errors.phone && (
            <p className="field-error" id="phone-error">
              {state.errors.phone}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email <span className="req">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            defaultValue={state.values.email}
            aria-invalid={state.errors.email ? true : undefined}
            aria-describedby={state.errors.email ? "email-error" : undefined}
          />
          {state.errors.email && (
            <p className="field-error" id="email-error">
              {state.errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Your Message"
          required
          defaultValue={state.values.message}
          aria-invalid={state.errors.message ? true : undefined}
          aria-describedby={state.errors.message ? "message-error" : undefined}
        />
        {state.errors.message && (
          <p className="field-error" id="message-error">
            {state.errors.message}
          </p>
        )}
      </div>
      <div className="form-checkbox">
        <input type="checkbox" id="terms" name="terms" required />
        <label htmlFor="terms">
          I agree to{" "}
          <a href="/terms-and-conditions">terms &amp; conditions</a> provided by
          the company. By providing my phone number, I agree to receive text
          messages from the business.
        </label>
      </div>
      {state.status === "error" && state.message && (
        <p className="form-status form-status-error" role="alert">
          {state.message}
        </p>
      )}
      <button type="submit" className="btn-submit" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
