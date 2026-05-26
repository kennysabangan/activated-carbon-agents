import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Activated Carbon Agents",
  description:
    "Terms and Conditions for using the Activated Carbon Agents website and purchasing our products and services.",
  openGraph: {
    title: "Terms & Conditions | Activated Carbon Agents",
    description: "Terms and Conditions for Activated Carbon Agents.",
    url: "https://activatedcarbonagents.com/terms-and-conditions",
    type: "website",
  },
};

export default function TermsAndConditions() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-headings:text-charcoal prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed">
        <h1>Terms &amp; Conditions</h1>
        <p><em>Last updated: January 1, 2026</em></p>

        <p>
          Welcome to Activated Carbon Agents. These Terms and Conditions (&quot;Terms&quot;) govern your use of our website located at activatedcarbonagents.com (the &quot;Site&quot;) and the purchase of products and services offered by Activated Carbon Agents (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our Site, you agree to be bound by these Terms.
        </p>

        <h2>Use of Website</h2>
        <p>
          You agree to use our Site only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict or inhibit anyone else&apos;s use and enjoyment of the Site. You may not use the Site in any way that could damage, disable, overburden, or impair the Site or interfere with any other party&apos;s use of the Site.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this Site — including text, graphics, logos, images, and software — is the property of Activated Carbon Agents or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this Site without our express written permission.
        </p>

        <h2>Products and Services</h2>
        <p>
          Activated Carbon Agents provides information about activated carbon products and services. While we strive to ensure the accuracy of all information presented on our Site, we make no guarantees regarding the completeness, reliability, or accuracy of product descriptions, pricing, or availability. All product information is subject to change without notice.
        </p>
        <p>
          Product specifications and performance data are provided for general informational purposes only. Actual performance may vary depending on application conditions, water quality, and other factors. We recommend consulting with our technical team for specific application guidance.
        </p>

        <h2>Orders and Payments</h2>
        <p>
          All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including errors in product information, pricing errors, or suspected fraud. Payment terms will be established on a per-order basis and communicated at the time of purchase.
        </p>
        <p>
          Prices quoted are exclusive of applicable taxes, shipping, and handling charges unless otherwise specified. All invoices are due according to the payment terms stated on the invoice.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, Activated Carbon Agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising out of or in connection with your use of the Site or purchase of products and services.
        </p>
        <p>
          Our total liability for any claims arising under these Terms shall not exceed the amount paid by you for the products or services giving rise to such claim.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          The Site and all content, products, and services provided through it are offered on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Activated Carbon Agents, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses arising out of your use of the Site or violation of these Terms.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our Site may contain links to third-party websites or services that are not owned or controlled by Activated Carbon Agents. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts located in Orange County, California.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time at our sole discretion. Changes will be posted on this page with an updated effective date. Your continued use of the Site after any changes constitutes acceptance of the new Terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about these Terms &amp; Conditions, please contact us at:
        </p>
        <p>
          Activated Carbon Agents<br />
          17512 Griffin Lane<br />
          Huntington Beach, CA 92647<br />
          Phone: (855) 934-3376<br />
          Email: kim@activatedcarbonagents.com
        </p>
      </div>
    </article>
  );
}
