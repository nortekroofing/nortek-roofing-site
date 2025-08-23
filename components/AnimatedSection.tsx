"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function AnimatedSection({ children }: PropsWithChildren<{}>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}
