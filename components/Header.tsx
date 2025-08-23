import Link from 'next/link'

export default function Header(){
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-md">
      <div className="container flex h-[var(--header-h)] items-center justify-between">
        <Link href="/" className="font-bold tracking-wide">Nortek</Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/projects" className="hover:text-black">Projects</Link>
          <Link href="/services" className="hover:text-black">Services</Link>
          <Link href="/about" className="hover:text-black">About</Link>
          <Link href="/contact" className="btn btn-primary">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
