import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision"

export default function WorkingHolidayQA() {
  return (
    <BackgroundBeamsWithCollision>
        <div className="relative w-[70%] ml-0 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger >
                What is a working holiday visa?
              </AccordionTrigger>
              <AccordionContent>
                A working holiday visa is a permit that allows young people to undertake employment (and sometimes study) in a foreign country for a specified period, typically up to one or two years.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" >
              <AccordionTrigger >
                Who is eligible for a working holiday visa?
              </AccordionTrigger>
              <AccordionContent >
                Eligibility varies by country, but generally, applicants must be between 18-30 years old (sometimes up to 35), have a valid passport, and meet health and character requirements. Some countries may also require proof of funds.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger >
                What types of jobs can I do on a working holiday?
              </AccordionTrigger>
              <AccordionContent >
                Working holiday jobs often include hospitality, tourism, agriculture, and retail. However, you can also find opportunities in your professional field, depending on your qualifications and the countrys regulations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" >
              <AccordionTrigger >
                How long can I stay on a working holiday visa?
              </AccordionTrigger>
              <AccordionContent >
                The duration varies by country, but most working holiday visas allow you to stay for 12 to 24 months. Some countries offer extensions or second-year visas if you meet certain conditions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" >
              <AccordionTrigger >
                Do I need to arrange a job before I arrive?
              </AccordionTrigger>
              <AccordionContent>
                Generally, you dont need a pre-arranged job to obtain a working holiday visa. However, having some savings is advisable, and some countries may require proof of funds to support yourself initially.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
    </BackgroundBeamsWithCollision>
  )
}