'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"

// Mock data for demonstration
const visas = [
  { id: 1, country: 'USA', type: 'Tourist', duration: '90 days', fee: '$160' },
  { id: 2, country: 'UK', type: 'Work', duration: '2 years', fee: '£610' },
  { id: 3, country: 'Japan', type: 'Student', duration: '1 year', fee: '¥3000' },
  { id: 4, country: 'Australia', type: 'Working Holiday', duration: '1 year', fee: 'AU$485' },
  { id: 5, country: 'Canada', type: 'Express Entry', duration: 'Permanent', fee: 'CA$1325' },
  // Add more visa data as needed
]

export default function VisaChart() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedVisa, setSelectedVisa] = useState(null)
  const [activeFilters, setActiveFilters] = useState([])

  const filterButtons = ['Tourist', 'Work', 'Student', 'Permanent']

  return (
    <div className="bg-zinc-800 w-full min-h-screen">
    <div className="container w-[80%] bg-white mx-auto min-h-screen px-10 py-8">
      <h1 className="text-3xl mt-32 font-bold mb-6">Global Visa Chart</h1>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search by country or visa type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {filterButtons.map(filter => (
            <Button
              key={filter}
              variant="default" 
              onClick={()=>{}}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              {filter}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visas.map(visa => (
          <Dialog key={visa.id}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h2 className="font-bold text-lg mb-2">{visa.country}</h2>
                  <Badge>{visa.type}</Badge>
                  <p className="mt-2 text-sm text-gray-600">Duration: {visa.duration}</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{visa.country} - {visa.type} Visa</DialogTitle>
                <DialogDescription>
                  <p><strong>Duration:</strong> {visa.duration}</p>
                  <p><strong>Fee:</strong> {visa.fee}</p>
                  <p className="mt-4">
                    This is a placeholder for more detailed information about the {visa.type} visa for {visa.country}. 
                    In a real application, this would include requirements, application process, and other relevant details.
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {visas.length === 0 && (
        <p className="text-center mt-8 text-gray-500">No visas found matching your search or filters.</p>
      )}
    </div>
    </div>
  )
}