import AnimatedSection from '@/components/AnimatedSection'

export default function About(){
  return (
    <main className="container py-24 space-y-16 max-w-3xl">
      <AnimatedSection>
        <h1 className="text-4xl font-serif mb-6">About Nortek</h1>
        <p className="text-lg text-muted">
          Placeholder copy telling the Nortek story and mission. This text can be replaced with real content later.
        </p>
      </AnimatedSection>
      <AnimatedSection>
        <p className="text-muted">
          Additional placeholder paragraphs that describe the company's approach, values, and history.
        </p>
      </AnimatedSection>
    </main>
  )
}
