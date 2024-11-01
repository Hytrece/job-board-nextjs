import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function CtaSection() {
  const ctaRef = useRef(null)

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section ref={ctaRef} className="py-16 relative text-white min-h-[400px] flex items-center">
      <Image 
        src="/cta.jpg" 
        layout="fill" 
        objectFit="cover" 
        alt="airplane" 
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 z-10" /> {/* Overlay for better text visibility */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8">Join thousands of happy travelers who have found their perfect working holiday with us.</p>
          <Link href="/dashboard" className="inline-block bg-white text-zinc-900 px-6 py-3 rounded-md hover:bg-zinc-300 hover:text-zinc-800 transition duration-300">
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}