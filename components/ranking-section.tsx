'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const cities = [
  { city: "Dublin", image: "/dublin-landing.jpg", gridArea: "1 / 1 / 2 / 5", korean:"더블린"},
  { city: "Berlin", image: "/germany/bg.jpg", gridArea: "1 / 5 / 2 / 9" ,korean:"베를린"},
  { city: "Lisbon", image: "/lisbon-landing.jpg", gridArea: "1 / 9 / 2 / 13" ,korean:"리스본"},
  { city: "Tokyo", image: "/tokyo-landing.jpg", gridArea: "2 / 1 / 3 / 7" ,korean:"도쿄"},
  { city: "Toronto", image: "/toronto-landing.jpg", gridArea: "2 / 7 / 3 / 13" ,korean:"토론토"},
  { city: "Barcelona", image: "/barcelona-landing.jpg", gridArea: "3 / 1 / 4 / 13" ,korean:"바르셀로나"}
];

export default function CitiesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-12 gap-4">
      {cities.map((city, index) => (
        <motion.div
          key={city.city}
          className="relative overflow-hidden rounded-lg group"
          style={{ gridArea: city.gridArea }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <Link href={`/${city.city.toLowerCase()}`} className="block h-full">
            <div className="relative h-full w-full min-h-[200px]">
              <Image
                src={city.image}
                alt={city.city}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {city.korean}
                </h3>
                <p className="text-sm text-white/90">
                  220 Locations
                </p>
              </div>

              {/* Hover effect for all cities */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-white" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M13 13l6 6m0 0l-6 6m6-6H7m4-4l6-6m0 0l-6-6m6 6H7"/>
                  </svg>
                </div>
              </motion.div>
            </div>
          </Link>
        </motion.div>
      ))}

    </div>
  )
}