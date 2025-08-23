import Header from "@/components/Header"
import dynamic from "next/dynamic"

const FeaturedProjects = dynamic(() => import("@/components/FeaturedProjectsClient"), { ssr:false })
import WhatWeDo from "@/components/WhatWeDo"
import SiteFooter from "@/components/SiteFooter"

export default function Home() {
  return (
    <>
      {/* Fixed hero video stays put; header will glide over it */}
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

      {/* Solid dark header that starts bottom and glides up */}
      <Header isHome />

      {/* Content that scrolls over the hero */}
      <main>
        <section className="section">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            {/* Motion hover grid */}
            {/* @ts-expect-error async client */}
            <FeaturedProjects />
            <p style={{textAlign:'center', marginTop: '16px'}}>
              <a className="btn ghost" href="/projects">All Projects</a>
            </p>
          </div>
        </section>

        <WhatWeDo />
      </main>

      <SiteFooter />
    </>
  )
}
