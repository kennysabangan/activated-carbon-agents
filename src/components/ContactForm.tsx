"use client";

export default function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <div className="form-checkbox">
        <input type="checkbox" id="terms" name="terms" required />
        <label htmlFor="terms">
          I agree to the{" "}
          <a href="/terms-and-conditions">Terms &amp; Conditions</a> and{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </label>
      </div>
      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  );
}
