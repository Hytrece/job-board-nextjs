'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, Variant } from 'framer-motion'

interface ScrollAnimationProps {
  children: React.ReactNode
  variants: {
    hidden: Variant
    visible: Variant
  }
}

export function ScrollAnimation({ children, variants }: ScrollAnimationProps) {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}