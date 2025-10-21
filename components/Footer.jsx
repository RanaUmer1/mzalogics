export default function Footer() {
  return (
    <footer className="border-t py-8 text-sm text-center text-gray-600">
      <div className="mx-auto max-w-6xl px-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} MZA Logics. All rights reserved.</p>
        <div className="flex items-center gap-4 justify-center">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  )
}
