import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="section-sm contact-section">
      <div className="container">
        <div className="contact-card fade-in">
          <h2>Have a Question?</h2>
          <p className="subtitle">
            One of our representatives will reach back to you quickly.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
