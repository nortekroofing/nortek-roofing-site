import AnimatedSection from '@/components/AnimatedSection'

export default function Login(){
  return (
    <main className="container py-24 max-w-sm">
      <AnimatedSection>
        <h1 className="text-4xl font-serif mb-8">Employee Login</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-muted">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded border border-white/10 bg-white/5 p-2 text-white focus:border-brand focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm text-muted">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded border border-white/10 bg-white/5 p-2 text-white focus:border-brand focus:outline-none"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">Log In</button>
        </form>
      </AnimatedSection>
    </main>
  )
}

