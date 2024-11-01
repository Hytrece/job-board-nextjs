'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What is a working holiday visa?",
    answer: "A working holiday visa is a travel permit that allows young people to work and study in foreign countries for an extended period, typically up to 1-2 years. It's designed to promote cultural exchange and allow travelers to fund their trips through temporary employment."
  },
  {
    question: "Which countries offer working holiday visas?",
    answer: "Many countries offer working holiday visas, including Australia, New Zealand, Canada, Japan, South Korea, and several European nations. Each country has its own specific requirements and agreements with other nations."
  },
  {
    question: "How long can I stay on a working holiday visa?",
    answer: "The duration varies by country, but most working holiday visas allow you to stay for 12-24 months. Some countries, like Australia, offer the possibility to extend your stay under certain conditions."
  },
  {
    question: "What types of jobs can I do on a working holiday?",
    answer: "Working holiday jobs often include hospitality, tourism, agriculture, and casual office work. However, you're generally free to pursue any type of employment, including internships in your field of study or career."
  },
  {
    question: "Do I need to speak the local language?",
    answer: "While it's beneficial to know the local language, it's not always required. English-speaking countries are popular choices for this reason. For non-English speaking countries, basic language skills can be helpful but many jobs are available for English speakers."
  }
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-16 mt-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="px-8">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Comprehensive FAQ: Working Holiday Insights
          </h4>

          <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Equip yourself with the knowledge you need for a successful working holiday adventure
          </p>
        </div>
        <div className="max-w-3xl mt-20 mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 bg-white rounded-b-lg shadow-md">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}