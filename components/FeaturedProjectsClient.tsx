"use client"

import { motion } from "framer-motion"

export default function FeaturedProjectsClient() {
  const cards = [
    { href: "/projects", title: "Langford Retail Plaza", sub: "Torch-on • 18,000 sq ft", img: "/placeholder.svg" },
    { href: "/projects", title: "Harbourview Strata", sub: "Re-roof & metal flashings", img: "/placeholder.svg" },
    { href: "/projects", title: "Industrial Bay A", sub: "Leak remediation", img: "/placeholder.svg" },
    { href: "/projects", title: "Seaside Complex", sub: "SBS + tapered ISO", img: "/placeholder.svg" },
  ]

  return (
    <div className="grid featured">
      {cards.map((c, i) => (
        <motion.a
          key={i}
          href={c.href}
          className="feature-card"
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <img src={c.img} alt={c.title} />
          <div className="feature-meta">
            <h3>{c.title}</h3>
            <p className="muted small">{c.sub}</p>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
