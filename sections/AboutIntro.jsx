import SectionHeader from '../components/ui/SectionHeader'
import GlassCard from '../components/ui/GlassCard'

export default function AboutIntro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader eyebrow="About Us" title="Mission‑driven engineering" description="We blend product thinking with strong engineering to ship business results." />
      <div className="mt-10 grid lg:grid-cols-3 gap-6">
        <GlassCard><h4 className="text-white font-semibold">Story</h4><p className="mt-2 text-white/70">Founded to help founders ship fast without sacrificing quality.</p></GlassCard>
        <GlassCard><h4 className="text-white font-semibold">Mission</h4><p className="mt-2 text-white/70">Deliver long‑term value through great UX, performance, and reliability.</p></GlassCard>
        <GlassCard><h4 className="text-white font-semibold">Expertise</h4><p className="mt-2 text-white/70">React/Next.js, Android/iOS, Electron/Tauri, Cloud, DevOps, Analytics.</p></GlassCard>
      </div>
    </section>
  )
}
