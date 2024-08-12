"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function SalaryCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-md font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Only show jobs with salary
      </label>
    </div>
  )
}
