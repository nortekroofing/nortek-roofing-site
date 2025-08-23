'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative flex h-[calc(100vh-var(--header-h))] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center opacity-20" aria-hidden="true" />
      <div className="relative z-10 text-center px-6 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif"
        >
          For the Island.<br/>For the Future.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto text-lg text-muted"
        >
          Flat and metal roofing systems built to stand the test of time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/projects" className="btn btn-primary">View Projects</Link>
        </motion.div>
      </div>
    </section>
  )
}
