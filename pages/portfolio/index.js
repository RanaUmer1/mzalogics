import Link from 'next/link'
import { getAll } from '../../lib/mdx'

export async function getStaticProps(){
  const cases = getAll('cases')
  return { props: { cases } }
}

export default function Portfolio({ cases }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Case Studies</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {cases.map(c => (
          <Link key={c.slug} href={`/portfolio/${c.slug}`} className="p-6 border rounded hover:shadow">
            <h3 className="font-semibold">{c.title || c.slug}</h3>
            {c.summary && <p className="text-slate-600 text-sm mt-2">{c.summary}</p>}
          </Link>
        ))}
      </div>
    </div>
  )
}
