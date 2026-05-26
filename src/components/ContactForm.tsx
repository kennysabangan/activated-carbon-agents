"use client";

import { useState } from "react";

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="contact-section">
      {/* Background image overlay */}
      <div className="contact-section-bg" />

      <div className="contact-form-card">
        <h1>Have a Question?</h1>
        <p className="sub-heading">One of our representatives will reach back to you quickly.</p>

        <form>
          {/* First & Last Name */}
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          {/* Phone & Email */}
          <div className="form-row">
            <div className="form-group">
              <label>Phone*</label>
              <input type="tel" required />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input type="email" required />
            </div>
          </div>

          {/* Message */}
          <div className="form-row">
            <div className="form-group full-width">
              <label>Your Message</label>
              <textarea rows={5} />
            </div>
          </div>

          {/* Checkbox */}
          <div className="checkbox-row">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="terms">
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
