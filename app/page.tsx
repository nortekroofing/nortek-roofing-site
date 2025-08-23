import Hero from '@/components/Hero'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  return (
    <>
      <Hero />
      <main className="container py-24">
        <AnimatedSection>
          <h2 className="text-3xl font-serif mb-4">Featured Projects</h2>
          <p className="text-sm text-muted">Wire this to Sanity later.</p>
        </AnimatedSection>
      </main>
    </>
  )
}
