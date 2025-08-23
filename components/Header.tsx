'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Header({ isHome = false }: { isHome?: boolean }) {
  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const header = headerRef.current
    const hero = document.getElementById('hero')
    if (!header || !hero) return

    const H = () => {
      const headerH = header.offsetHeight
      const heroH = hero.offsetHeight
      const y = Math.max(heroH - window.scrollY - headerH, 0)
      header.style.transform = `translateY(${y}px)`
    }

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(H)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', H)
    H()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', H)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <header ref={headerRef} className={`site-header solid${isHome ? ' home' : ''}`}>
        <div className="header-inner edge">
          <Link href="/" className="brand" aria-label="Nortek home">
            <img src="/logo.svg" alt="Nortek" className="logo" />
          </Link>

          <button className="menu-btn" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <div className="menu-panel" role="dialog" aria-modal="true">
        <nav className="menu-nav">
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(){
            var open=false;
            var btn=document.querySelector('.menu-btn');
            var panel=document.querySelector('.menu-panel');
            if(!btn||!panel) return;
            btn.addEventListener('click',function(){
              open=!open;
              btn.classList.toggle('open',open);
              panel.classList.toggle('open',open);
              document.documentElement.style.overflow = open ? 'hidden' : '';
              document.body.style.overflow = open ? 'hidden' : '';
            });
          })();`
        }}
      />
    </>
  )
}
