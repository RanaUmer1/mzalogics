export default function HeroFallback() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Build, launch, and scale modern apps</h1>
        <p className="mt-4 max-w-2xl text-slate-600">Android, iOS, Web, Desktop, QA, and Growth Marketing — delivered by a single expert team.</p>
        <div className="mt-6 flex gap-3">
          <a href="/contact" className="px-5 py-2 rounded bg-blue-600 text-white">Start a project</a>
          <a href="/portfolio" className="px-5 py-2 rounded border">See case studies</a>
        </div>
      </div>
    </div>
  )
}
