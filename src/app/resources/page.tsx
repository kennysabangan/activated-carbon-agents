import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Resources - Activated Carbon Agents",
  description: "Educational resources and articles about activated carbon, its uses, and industry insights.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="max-w-[1200px] mx-auto px-4 py-16">
        <h1 className="font-headline font-bold text-[32px] mb-4">
          Resources
        </h1>
        <p className="font-headline text-[20px] leading-relaxed mb-12">
          Explore our collection of articles and guides about activated carbon and its many applications.
        </p>

        {/* Blog Card */}
        <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <span className="font-form text-sm text-gray-500">Activated Carbon</span>
            <span className="font-form text-sm text-gray-400 ml-4">January 15, 2025</span>
            <span className="font-form text-sm text-gray-400 ml-4">4 min read</span>
            <h2 className="font-headline font-bold text-[28px] mt-3 mb-3">
              <Link href="/resources/b/what-is-activated-carbon" className="hover:text-linkBlue transition-colors">
                What is Activated Carbon?
              </Link>
            </h2>
            <p className="font-content text-[16px] text-gray-700 leading-relaxed mb-4">
              Activated carbon is a form of carbon processed to have small, low-volume pores that increase the surface area available for adsorption or chemical reactions. Learn about its types, manufacturing process, and wide-ranging applications.
            </p>
            <Link
              href="/resources/b/what-is-activated-carbon"
              className="inline-block font-headline text-linkBlue hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
