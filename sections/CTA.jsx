import Button from '../components/ui/Button'

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-indigo-600/30 to-violet-600/30 p-8 md:p-12 backdrop-blur">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Have a project in mind?</h3>
            <p className="text-white/70 mt-2">Get a tailored estimate in 24 hours.</p>
          </div>
          <Button as="a" href="#contact">Get a Quote</Button>
        </div>
      </div>
    </section>
  )
}
