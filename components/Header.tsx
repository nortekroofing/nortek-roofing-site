export default function Header(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="container h-[var(--header-h)] flex items-center justify-between">
        <a href="/" className="font-extrabold tracking-wide">Nortek</a>
        <nav className="flex gap-6 text-sm">
          <a href="/projects">Projects</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a className="px-3 py-1.5 rounded-md bg-emerald-500 text-black font-semibold" href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
