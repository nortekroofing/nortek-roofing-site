'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function AnimatedSection({children}:{children:React.ReactNode}){
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce:true, threshold:0.1 })

  useEffect(() => {
    if(inView){
      controls.start({ opacity:1, y:0 })
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity:0, y:40 }}
      animate={controls}
      transition={{ duration:0.6, ease:'easeOut' }}
      className="mb-16"
    >
      {children}
    </motion.section>
  )
}
