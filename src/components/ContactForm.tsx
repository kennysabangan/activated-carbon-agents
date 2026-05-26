"use client";

import { useState } from "react";

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="relative w-full py-16 md:py-24" style={{ backgroundColor: "#596654" }}>
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(/images/contact-bg.jpeg)" }}
      />

      <div className="relative z-10 w-[85%] mx-auto bg-white rounded-[20px] p-5 md:p-10">
        <h1 className="font-headline font-bold text-[32px] md:text-[56px] leading-tight" style={{ color: "#000321", letterSpacing: "-1px" }}>
          Have a Question?
        </h1>
        <p className="font-content text-[23px] mt-2 mb-8 text-gray-700">
          One of our representatives will reach back to you quickly.
        </p>

        <form className="space-y-4">
          {/* First & Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <label className="block font-form text-sm font-medium mb-1" style={{ color: "#2c3345" }}>
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-[5px] font-form text-xs font-light outline-none"
                style={{ backgroundColor: "#fff", border: "1px solid #ACACAC" }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block font-form text-sm font-medium mb-1" style={{ color: "#2c3345" }}>
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-[5px] font-form text-xs font-light outline-none"
                style={{ backgroundColor: "#fff", border: "1px solid #ACACAC" }}
              />
            </div>
          </div>

          {/* Phone & Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <label className="block font-form text-sm font-medium mb-1" style={{ color: "#2c3345" }}>
                Phone*
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 rounded-[5px] font-form text-xs font-light outline-none"
                style={{ backgroundColor: "#fff", border: "1px solid #ACACAC" }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block font-form text-sm font-medium mb-1" style={{ color: "#2c3345" }}>
                Email*
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-[5px] font-form text-xs font-light outline-none"
                style={{ backgroundColor: "#fff", border: "1px solid #ACACAC" }}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block font-form text-sm font-medium mb-1" style={{ color: "#2c3345" }}>
              Your Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-[5px] font-form text-xs font-light outline-none resize-none"
              style={{ backgroundColor: "#fff", border: "1px solid #ACACAC" }}
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="terms" className="font-form text-xs" style={{ color: "#2c3345" }}>
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 font-form text-sm text-white rounded-[5px] hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#933A16", paddingLeft: "50px", paddingRight: "50px" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
