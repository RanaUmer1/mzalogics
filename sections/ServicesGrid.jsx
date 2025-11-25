import { Code, Smartphone, MonitorSmartphone, Megaphone, Laptop, Globe } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import Link from 'next/link'

const services = [
  { slug: 'android', title: 'Android Apps', icon: Smartphone, features: ['Kotlin/Compose', 'Play Store', 'CI/CD'] },
  { slug: 'ios', title: 'iOS Apps', icon: MonitorSmartphone, features: ['SwiftUI', 'App Store', 'TestFlight'] },
  { slug: 'web', title: 'Web Apps', icon: Globe, features: ['Next.js', 'SSR/SEO', 'SaaS/Microservices'] },
  { slug: 'desktop', title: 'Desktop', icon: Laptop, features: ['Electron/Tauri', 'Cross‑platform', 'Auto‑updates'] },
  { slug: 'marketing', title: 'Marketing', icon: Megaphone, features: ['SEO/ASO', 'Paid Ads', 'Landing Pages'] },
  { slug: 'consulting', title: 'Consulting', icon: Code, features: ['Architecture', 'Audits', 'Migrations'] },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader eyebrow="What we do" title="Services engineered for outcomes" description="Delivery‑focused teams with senior ownership." />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ slug, title, icon: Icon, features }) => (
          <GlassCard key={slug}>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-gradient-to-tr from-indigo-500/40 to-violet-500/40 p-3 ring-1 ring-white/15">
                <Icon className="text-white" size={22} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <ul className="mt-2 text-sm text-white/70 list-disc list-inside space-y-1">
                  {features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <div className="mt-4">
                  <Button as={Link} href={`/services/${slug}`} variant="glass" className="text-sm">Learn more</Button>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
