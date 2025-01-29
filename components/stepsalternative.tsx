'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Building2, FileText, Clock, MapPin, Ticket } from 'lucide-react'
import { cn } from "@/lib/utils"

interface Step {
  title: string
  description: string
}

const stepIcons = [FileText, Building2, Clock, MapPin, Ticket]

export default function WorkingHolidayGuide({ steps }: { steps: Step[] }) {
  return (
    <section className="w-full py-12 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length]
            return (
              <Card key={index} className="h-full hover:shadow-md transition-shadow bg-white border-none">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-medium text-gray-500">Step {index + 1}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-2 text-gray-800">{step.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>Process typically takes 4-6 weeks to complete</span>
          </div>
        </div>
      </div>
    </section>
  )
}

