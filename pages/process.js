const steps = ['Discovery', 'Design', 'Development', 'QA & Hardening', 'Launch', 'Growth']
export default function Process() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Our Process</h1>
      <ol className="mt-6 space-y-3 list-decimal list-inside">
        {steps.map(s => (<li key={s} className="text-slate-700">{s}</li>))}
      </ol>
    </div>
  )
}
