export default function Careers() {
  const jobs = [
    { title: 'Senior React Native Engineer', location: 'Remote' },
    { title: 'QA Automation Engineer', location: 'Remote' },
  ]
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Careers</h1>
      <div className="grid gap-4 mt-6">
        {jobs.map(j => (
          <div key={j.title} className="p-6 border rounded">
            <div className="font-semibold">{j.title}</div>
            <div className="text-slate-600 text-sm">{j.location}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
