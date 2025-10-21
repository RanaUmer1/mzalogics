import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className="border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={120} height={32} priority />
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/process">Process</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact" className="rounded bg-blue-600 text-white px-3 py-1">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
