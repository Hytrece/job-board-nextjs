'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
const steps = [
  {
    title: "Check Eligibility",
    description: "Verify that you meet the age requirements and citizenship criteria for the working holiday program.",
    image: "/canada-online.jpg"
  },
  {
    title: "Gather Required Documents",
    description: "Collect necessary documents such as passport, proof of funds, and medical certificates.",
    image: "/canada-documents.jpg"
  },
  {
    title: "Apply Online",
    description: "Complete the online application form and pay the application fee.",
    image: "/canada-apply.jpg"
  },
  {
    title: "Wait for Processing",
    description: "Allow time for your application to be processed. This can take several weeks.",
    image: "/canada-wait.jpg"
  },
  {
    title: "Receive Decision",
    description: "If approved, you'll receive your working holiday visa or approval letter.",
    image: "/canada-departure.jpg"
  },
  {
    title: "Prepare for Departure",
    description: "Book your flights, arrange accommodation, and prepare for your working holiday adventure!",
    image: "/canada-flag.jpg"
  }
]

export default function WorkingHolidayGuide() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const [progress, setProgress] = useState<number[]>(new Array(steps.length).fill(0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
            
            const index = stepsRef.current.findIndex(ref => ref === entry.target)
            if (index !== -1) {
              setProgress(prev => {
                const newProgress = [...prev]
                newProgress[index] = 1
                return newProgress
              })
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200">
          <div 
            className="absolute top-0 left-0 w-full bg-blue-500 transition-all duration-1000 ease-out"
            style={{ height: `${(progress.reduce((a, b) => a + b) / steps.length) * 100}%` }}
          ></div>
        </div>
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="flex items-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 pr-8' : 'order-1 pr-8'}`}>
                {index % 2 === 0 ? (
                  <Card className="p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                      <CheckCircle2 className={`mr-2 ${progress[index] ? 'text-green-500' : 'text-gray-300'}`} />
                      Step LEFT {index + 1}: {step.title}
                    </h2>
                    <p className="text-gray-600">{step.description}</p>
                  </Card>
                ) : (
                  <div className="relative h-[200px]">
                    <Card className="overflow-hidden w-full h-full relative opacity-90">
                      <Image src={step.image} fill={true} alt="image" objectFit='cover'/>
                    </Card>
                  </div>
                )}
              </div>
              <div className="w-2/12 flex justify-center order-2">
                <div className={`w-8 h-8 rounded-full border-4 border-white ${progress[index] ? 'bg-blue-500' : 'bg-gray-200'} transition-all duration-500 ease-out`}></div>
              </div>
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-3 pl-8' : 'order-3 pl-8'}`}>
                {index % 2 === 0 ? (
                  <div className="relative h-[200px] ">
                    <Card className="overflow-hidden w-full h-full relative opacity-90">
                      <Image src={step.image} fill={true} alt="image" objectFit='cover'/>
                    </Card>
                  </div>
                ) : (
                  <Card className="p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                      <CheckCircle2 className={`mr-2 ${progress[index] ? 'text-green-500' : 'text-gray-300'}`} />
                      Step {index + 1}: {step.title}
                    </h2>
                    <p className="text-gray-600">{step.description}</p>
                  </Card>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}