import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface Question{
  question:string,
  answer:string,
}
export default function WorkingHolidayQA({questionList}:{questionList:Question[]}) {
  return (
        <div className="relative w-[75%] ml-0 ">
          <Accordion type="single" collapsible className=" text-lg text-left w-full">
            {questionList.map((question,idx)=>(
              <AccordionItem key={idx} value={`${idx}`}>
                <AccordionTrigger >
                  {question.question}
                </AccordionTrigger>
                <AccordionContent className="text-md">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
              ))
            }
          </Accordion>
        </div>
  )
}