"use client";
import { useEffect } from "react";

export default function Header({ isHome = false }: { isHome?: boolean }) {
  useEffect(() => {
    if (!isHome) return;
    const headerEl = document.querySelector<HTMLElement>(".site-header");
    const heroEl   = document.querySelector<HTMLElement>(".hero-video");
    if (!headerEl || !heroEl) return;

    const headerH = () => headerEl.offsetHeight || 64;
    const heroH   = () => Math.max(heroEl.offsetHeight, window.innerHeight || 0);

    let ticking = false;
    const update = () => {
      const remaining = Math.max(heroH() - headerH() - window.scrollY, 0);
      headerEl.style.transform = `translateY(${remaining}px)`;
      ticking = false;
    };
    const onScroll = () => { if (!ticking){ ticking = true; requestAnimationFrame(update); } };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/">
          <img src="/logo.svg" alt="" className="logo" />
          <span>Nortek Roofing</span>
        </a>
        <nav className="nav" id="nav">
          <a href="/projects">Projects</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact" className="btn primary">Contact</a>
        </nav>
      </div>
    </header>
  );
}
