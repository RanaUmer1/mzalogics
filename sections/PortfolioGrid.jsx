import Image from 'next/image'
import { motion } from 'framer-motion'
import GlassCard from '../components/ui/GlassCard'
import SectionHeader from '../components/ui/SectionHeader'

const projects = [
  { slug: 'alpha', title: 'Alpha Commerce', tag: 'Web • SaaS', image: '/portfolio/alpha.jpg' },
  { slug: 'orion', title: 'Orion Health', tag: 'Android • Healthcare', image: '/portfolio/orion.jpg' },
  { slug: 'nova', title: 'Nova Finance', tag: 'iOS • Fintech', image: '/portfolio/nova.jpg' },
]

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader eyebrow="Case Studies" title="Selected work" description="Outcomes we shipped with our partners." />
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <motion.a key={p.slug} href={`/portfolio/${p.slug}`} whileHover={{ y: -6 }} className="block">
            <GlassCard className="p-0 overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src={p.image} alt={p.title} fill className="object-cover" priority={false} />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-white/60">{p.tag}</p>
                <h3 className="mt-1 font-semibold text-white">{p.title}</h3>
              </div>
            </GlassCard>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
