'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header({ isHome = false }: { isHome?: boolean }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.dataset.menuOpen = open ? 'true' : 'false'
    document.documentElement.style.overflow = open ? 'hidden' : ''
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      delete document.body.dataset.menuOpen
    }
  }, [open])

  const closeAndGo = () => setOpen(false)

  return (
    <>
      <header className={`site-header${isHome ? ' home' : ''}`}>
        <div className="header-inner edge">
          <Link href="/" className="brand" aria-label="Nortek home">
            <img src="/logo.svg" alt="Nortek" className="logo" />
          </Link>

          <button
            className={`menu-btn${open ? ' open' : ''}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`menu-panel${open ? ' open' : ''}`} role="dialog" aria-modal="true">
        <nav className="menu-nav">
          <Link href="/services" onClick={closeAndGo}>Services</Link>
          <Link href="/projects" onClick={closeAndGo}>Projects</Link>
          <Link href="/about" onClick={closeAndGo}>About</Link>
          <Link href="/contact" onClick={closeAndGo}>Contact</Link>
        </nav>
      </div>
    </>
  )
}
