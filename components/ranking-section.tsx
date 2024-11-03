import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const topDestinations = [
  {
    "city": "Sydney",
    "country": "Australia",
    "image": "/australia/bg.jpg",
    "description": "Iconic beaches, vibrant culture, and endless job opportunities in a sun-soaked metropolis."
  },
  {
    "city": "Vancouver",
    "country": "Canada",
    "image": "/canada/bg.jpg",
    "description": "A perfect blend of urban life and nature, with a booming tech scene and stunning landscapes."
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "image": "/ireland/bg.jpg",
    "description": "Rich history meets modern innovation in this friendly, pub-filled city with a strong job market."
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "image": "/japan/bg.jpg",
    "description": "Futuristic technology alongside ancient traditions in the world's largest metropolitan area."
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "image": "/germany/bg.jpg",
    "description": "A hub of creativity and startups with a rich history and vibrant nightlife."
  },
  {
    "city": "Barcelona",
    "country": "Spain",
    "image": "/spain/bg.jpg",
    "description": "A captivating city known for its art, architecture, and Mediterranean beaches, offering a lively atmosphere."
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "image": "/netherlands/bg.jpg",
    "description": "Famous for its canals, museums, and progressive culture, it's a charming city with a vibrant tech scene."
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "image": "/portugal/bg.jpg",
    "description": "A sun-kissed city with rich history, vibrant neighborhoods, and stunning views over the Atlantic Ocean."
  }
]


export default function RankingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Top Working Holiday Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {topDestinations.map((destination, index) => (
            <motion.div
              key={destination.city}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={destination.image}
                  alt={`${destination.city}, ${destination.country}`}
                  fill={true}
                  objectFit='cover'
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:opacity-60" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{destination.city}</h3>
                <p className="text-sm">{destination.country}</p>
              </div>
              <motion.div
                className="absolute inset-0 p-4 flex items-center justify-center bg-black bg-opacity-75 text-white opacity-0 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              >
                <p className="text-center">{destination.description}</p>
              </motion.div>
              <motion.div
                className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}