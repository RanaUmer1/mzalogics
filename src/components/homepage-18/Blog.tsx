import blog1 from '@public/images/home-page-18/blog-1.png';
import blog2 from '@public/images/home-page-18/blog-2.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Blog = () => {
  const posts = [
    {
      id: 1,
      tag: 'DevOps',
      title: 'How to reduce deployment risk without slowing teams down',
      href: '/blog',
      image: blog1,
    },
    {
      id: 2,
      tag: 'Engineering',
      title: 'From manual deploys to automated pipelines: a practical guide',
      href: '/blog',
      image: blog2,
    },
  ];

  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Resources</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>Latest insights from the blog</h2>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {posts.map((post, index) => (
            <RevealAnimation key={post.id} delay={0.4 + index * 0.1}>
              <article className="col-span-12 md:col-span-6 lg:col-span-6 bg-white dark:bg-background-8 rounded-[20px] overflow-hidden">
                <figure className="w-full h-[220px] overflow-hidden">
                  <Image src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </figure>
                <div className="p-6 space-y-3">
                  <span className="inline-flex items-center rounded-full bg-background-3 dark:bg-background-7 px-3 py-1 text-tagline-3 text-secondary/70 dark:text-accent/70">
                    {post.tag}
                  </span>
                  <h3 className="text-heading-6 md:text-heading-5">
                    <Link href={post.href}>{post.title}</Link>
                  </h3>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
