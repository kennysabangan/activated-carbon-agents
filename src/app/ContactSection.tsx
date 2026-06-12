import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="section-sm contact-section">
      <Image
        src="/images/hero-carbon.webp"
        alt=""
        fill
        sizes="100vw"
        quality={70}
        className="contact-bg-img"
      />
      <div className="contact-overlay" />
      <div className="container contact-inner">
        <div className="contact-card fade-in">
          <p className="overline overline-centered">Get In Touch</p>
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
