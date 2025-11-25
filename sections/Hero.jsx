import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const Hero3D = dynamic(() => import('../components/Hero3D'), { ssr: false })
const HeroFallback = dynamic(() => import('../components/HeroFallback'), { ssr: true })

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-700/40 via-indigo-700/20 to-transparent" />
      <div className="absolute -z-10 left-1/2 top-0 h-[480px] w-[640px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-2xl" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge>Full‑stack Product Studio</Badge>
            <h1 className="mt-4 text-5xl/tight sm:text-6xl/tight font-extrabold text-white">
              We design and build high‑impact apps for Android, iOS, Web, and Desktop.
            </h1>
            <p className="mt-4 text-white/70">
              From concept to scale—engineering, design, and go‑to‑market under one roof.
            </p>
            <div className="mt-8 flex gap-3">
              <Button href="#contact" as="a">Get a Quote</Button>
              <Button href="/portfolio" as="a" variant="glass">See Work</Button>
            </div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className="aspect-[4/3] rounded-3xl border border-white/15 bg-white/5 backdrop-blur overflow-hidden">
              <noscript><HeroFallback /></noscript>
              <Hero3D />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
