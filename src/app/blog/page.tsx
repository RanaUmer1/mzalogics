import Navbar from '@/components/mza/Navbar';
import Footer from '@/components/mza/Footer';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const blogPosts = [
  {
    title: "Why Scalability is the #1 Metric for Startups in 2026",
    excerpt: "Most apps fail because they can't handle success. Learn how to architect your product for million-user growth from day one.",
    date: "April 15, 2026",
    category: "Architecture",
    slug: "scalability-metric-startups"
  },
  {
    title: "Kotlin Multiplatform vs Flutter: Choosing Your 2026 Stack",
    excerpt: "A deep dive into the pros and cons of modern cross-platform frameworks for high-performance engineering.",
    date: "April 10, 2026",
    category: "Mobile",
    slug: "kmp-vs-flutter-2026"
  },
  {
    title: "The Role of AI in Product Engineering: Beyond Chatbots",
    excerpt: "How we integrate machine learning to automate complex business workflows and increase ROI.",
    date: "April 5, 2026",
    category: "AI",
    slug: "ai-product-engineering"
  }
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-mza-bg text-white pt-32 min-h-screen">
        <section className="py-24">
          <div className="main-container">
            <RevealAnimation delay={0.1}>
              <h1 className="text-6xl font-bold mb-16 italic tracking-tighter">Insights on <span className="text-mza-neon">Engineering</span> & Growth.</h1>
            </RevealAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <RevealAnimation key={index} delay={0.1 * index} direction="up">
                  <div className="group p-8 rounded-[2rem] bg-mza-bg-soft border border-white/5 hover:border-mza-neon/20 transition-all flex flex-col h-full">
                    <div className="flex justify-between items-center mb-6">
                       <span className="text-xs font-bold uppercase tracking-widest text-mza-neon px-3 py-1 bg-mza-neon/10 rounded-md">{post.category}</span>
                       <span className="text-xs text-gray-500 font-bold">{post.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-mza-neon transition-colors leading-tight italic">{post.title}</h2>
                    <p className="text-gray-400 mb-8 flex-grow">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="font-bold border-b-2 border-mza-neon pb-1 w-fit hover:tracking-widest transition-all">
                      Read Article
                    </Link>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
