import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Activated Carbon Agents",
  description:
    "Explore resources and insights about activated carbon — learn about types, production, applications, and selecting the right carbon for your needs.",
  keywords: [
    "activated carbon resources",
    "what is activated carbon",
    "activated carbon types",
    "activated carbon blog",
    "GAC",
    "PAC",
    "pelletized carbon",
  ],
  openGraph: {
    title: "Resources | Activated Carbon Agents",
    description:
      "Explore resources and insights about activated carbon.",
    url: "https://activatedcarbonagents.com/resources",
    type: "website",
  },
};

const posts = [
  {
    title: "What is Activated Carbon?",
    excerpt:
      "Activated carbon is a highly porous material derived from organic sources such as coconut shells, wood, or coal. Learn about its structure, types, production methods, and benefits across industries.",
    category: "Activated Carbon",
    date: "January 15, 2025",
    readTime: "4 min read",
    slug: "/resources/b/what-is-activated-carbon",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Resources &amp; Insights
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Stay informed with the latest insights on activated carbon products, applications, and industry trends.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={post.slug}
                className="block bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                    <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-charcoal mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 text-primary font-semibold flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
