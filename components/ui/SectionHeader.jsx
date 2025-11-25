export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      {eyebrow && <p className="text-xs uppercase tracking-widest text-white/60">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
        {title}
      </h2>
      {description && <p className="mt-3 text-white/70">{description}</p>}
    </div>
  )
}
