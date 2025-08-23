import AnimatedSection from '@/components/AnimatedSection'

export default function Contact(){
  return (
    <main className="container py-24 max-w-xl space-y-8">
      <AnimatedSection>
        <h1 className="text-4xl font-serif mb-6">Get in Touch</h1>
        <p className="text-muted mb-8">
          Placeholder content inviting visitors to reach out. Replace with contact information or form.
        </p>
        <a href="mailto:info@nortekexteriors.com" className="btn btn-primary">Email Us</a>
      </AnimatedSection>
    </main>
  )
}
