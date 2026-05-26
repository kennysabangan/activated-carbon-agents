import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - Activated Carbon Agents",
  description: "Privacy Policy for Activated Carbon Agents website and services.",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />

      <article className="article-content">
        <h1>Privacy Policy</h1>

        <p><strong>Effective Date:</strong> January 1, 2025</p>

        <h2>Introduction</h2>
        <p>
          Activated Carbon Agents (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect information about you in a variety of ways:</p>
        <ul>
          <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you voluntarily provide through our contact forms.</li>
          <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
          <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our site.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide customer service</li>
          <li>Process orders and deliver products</li>
          <li>Send you information about our products and services</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us using the information below.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          Activated Carbon Agents<br />
          17512 Griffin Lane, Huntington Beach CA 92647<br />
          Phone: (855) 934-3376<br />
          Email: kim@activatedcarbonagents.com
        </p>
      </article>

      <Footer />
    </main>
  );
}
