import Link from 'next/link'

export default function Header(){
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="container flex h-[var(--header-h)] items-center justify-between">
        <Link href="/" className="font-bold tracking-wide">Nortek</Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/login" className="hover:text-white">Employee Login</Link>
          <Link href="/contact" className="btn btn-primary">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
