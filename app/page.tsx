import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="home">
      {/* Fixed hero */}
      <section className="hero-video" id="hero">
        <video className="hero-bg" src="/hero.mp4" autoPlay muted loop playsInline />
        <div className="hero-overlay">
          <h1 className="hero-copy">For the Island. For the Future.<br/>By Nortek.</h1>
          <div className="cta-row">
            <a className="btn primary" href="/services">Explore Services</a>
            <a className="btn glass" href="/projects">View Projects</a>
          </div>
        </div>
      </section>

      {/* Header that glides over the hero */}
      <Header isHome />

      {/* Content scrolls over the hero */}
      <main>
        <section className="section">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="grid featured">
              <a className="feature-card" href="/projects">
                <img src="/placeholder.svg" alt="Project" />
                <div className="feature-meta">
                  <h3>Boulderhouse Climbing Langford</h3>
                  <p className="muted small">1109 Langford Pkwy</p>
                </div>
              </a>
              <a className="feature-card" href="/projects">
                <img src="/placeholder.svg" alt="Project" />
                <div className="feature-meta">
                  <h3>Hull’s Corner Business Park</h3>
                  <p className="muted small">967 Langford Pkwy</p>
                </div>
              </a>
              <a className="feature-card" href="/projects">
                <img src="/placeholder.svg" alt="Project" />
                <div className="feature-meta">
                  <h3>Meaford Heights Apartments</h3>
                  <p className="muted small">728 Meaford Ave</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="about-split">
              <div>
                <h2 className="section-title">Precision, safety, and service.</h2>
                <p>We balance on-site craft with tight project coordination. Clear communication, predictable schedules, tidy job sites.</p>
                <ul className="small muted">
                  <li>Licensed, insured, safety-first</li>
                  <li>Detailed quotes & progress updates</li>
                  <li>Warranty options available</li>
                </ul>
                <p><a className="btn primary" href="/services">Explore Services</a></p>
              </div>
              <div>
                <img src="/placeholder.svg" alt="Metal flashing fabrication" className="rounded shadow"/>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>Nortek Roofing</h4>
            <p className="muted small">Victoria • Westshore • Nanaimo</p>
            <p className="muted small"><a href="tel:2505907164">+1 (250) 590 - 7164</a><br/><a href="mailto:info@nortekexteriors.com">info@nortekexteriors.com</a></p>
          </div>
          <div>
            <h5>Learn More</h5>
            <p className="small"><a href="/services">Services</a> · <a href="/about">About</a> · <a href="/projects">Projects</a></p>
          </div>
          <div>
            <h5>Get a Quote</h5>
            <p className="muted small">Tell us about your project and timeline. We’ll get back to you quickly.</p>
            <p><a className="btn primary" href="/contact">Request a Quote</a></p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2025 Nortek Roofing. All rights reserved. · <a href="/privacy">Privacy</a></p>
        </div>
      </footer>
    </div>
  );
}
