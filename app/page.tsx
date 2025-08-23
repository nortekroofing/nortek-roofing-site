import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <section className="hero-video" id="hero">
        <video className="hero-bg" src="/hero.mp4" autoPlay muted loop playsInline />
        <div className="hero-overlay">
          <h1 className="hero-stack">
            <span>BUILT FOR THE ISLAND.</span>
            <span>INSTALLED WITH PRECISION.</span>
            <span>DESIGNED TO STAND THE TEST OF TIME.</span>
            <em>NORTEK.</em>
          </h1>
        </div>
      </section>

      <Header isHome />

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
      </main>
    </>
  );
}
