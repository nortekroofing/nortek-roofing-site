import { motion } from "framer-motion";
import HeroVideo from '@/components/HeroVideo'

export default function Home() {
  return (
    <>
      <HeroVideo />
      <main className="container py-16">
        <section className="mb-16">
          <motion.h2
  className="text-2xl font-bold mb-4"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Featured Projects
</motion.h2>
          <p className="text-sm opacity-80">Wire this to Sanity later.</p>
        </section>
      </main>
    </>
  )
}
