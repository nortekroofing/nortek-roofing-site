'use client'

export default function HeroVideo(){
  const scrollToMain = () => document.querySelector('main')?.scrollIntoView({behavior:'smooth'})
  return (
    <section className="hero-video">
      <video className="bg" autoPlay muted loop playsInline poster="/hero-poster.jpg">
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <h1>
          For the Island.<br/>
          For the Future.<br/>
          By Nortek.
        </h1>

        <div className="hero-justified" aria-label="Nortek mission statement">
          <span>FLAT AND METAL</span>
          <span>ROOFING SYSTEMS</span>
          <span>BUILT FOR THE ISLAND.</span>
          <span>ENGINEERED FOR RESILIENCE.</span>
          <span>INSTALLED WITH PRECISION.</span>
          <span>DESIGNED TO STAND THE TEST OF TIME.</span>
          <span className="brand-line">NORTEK</span>
        </div>

        <button className="scroll-cue" aria-label="Scroll" onClick={scrollToMain}>↓</button>
      </div>
    </section>
  )
}
