'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function BodyClass() {
  const pathname = usePathname()
  useEffect(() => {
    const isHome = pathname === '/' || pathname === ''
    document.body.classList.toggle('home', isHome)
    return () => { document.body.classList.remove('home') }
  }, [pathname])
  return null
}
