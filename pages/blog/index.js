import Link from 'next/link'
import { getAll } from '../../lib/mdx'

export async function getStaticProps(){
  const posts = getAll('blog')
  return { props: { posts } }
}

export default function Blog({ posts }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid gap-6 mt-6">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="p-6 border rounded hover:shadow">
            <h3 className="font-semibold">{p.title}</h3>
            {p.summary && (<p className="text-slate-600 text-sm mt-2">{p.summary}</p>)}
          </Link>
        ))}
      </div>
    </div>
  )
}
