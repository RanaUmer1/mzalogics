import Link from 'next/link'
import { getAll } from '../../lib/mdx'

export async function getStaticProps(){
  const services = getAll('services')
  return { props: { services } }
}

export default function Services({ services }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {services.map(s => (
          <Link key={s.slug} className="p-6 border rounded hover:shadow" href={`/services/${s.slug}`}>
            <div className="font-semibold">{s.title || s.slug}</div>
            {s.summary && <p className="text-slate-600 text-sm mt-1">{s.summary}</p>}
          </Link>
        ))}
      </div>
    </div>
  )
}
