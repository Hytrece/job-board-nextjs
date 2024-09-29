import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface Question{
  title:string,
  desc:string,
}
export default function WorkingHolidayQA({questionList}:{questionList:Question[]}) {
  return (
        <div className="relative w-[70%] ml-0 ">
          <Accordion type="single" collapsible className=" text-lg w-full">
            {questionList.map((question,idx)=>(
              <AccordionItem key={idx} value={`${idx}`}>
                <AccordionTrigger >
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="text-md">
                  {question.desc}
                </AccordionContent>
              </AccordionItem>
              ))
            }
          </Accordion>
        </div>
  )
}