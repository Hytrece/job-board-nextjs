import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Information = () => {
  return (
    <div className="relative overflow-y-visible">
      <div className="flex flex-col gap-y-3 mt-10 ml-10">
        <h2 className="text-2xl font-bold">Working Holiday in Canada</h2>
        <ul className="gap-y-1 flex flex-col z-10 font-md">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            distinctio illo ab nisi sit numquam animi quos quia dolorum
            temporibus. Accusamus iste odit, rerum porro maiores mollitia nulla,
            doloremque, quia repellendus velit est quam. Enim maiores itaque
            ullam autem voluptatibus in vel similique! Quasi nihil similique
            cupiditate ullam hic dolore.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            laudantium cupiditate in sapiente. Quod esse dignissimos, explicabo
            consequuntur fuga provident mollitia sunt doloremque ut sit odit rem
            corporis obcaecati omnis quisquam cupiditate perferendis modi
            officia doloribus magni delectus voluptatibus nesciunt beatae
            reprehenderit. Doloribus magnam dolores officiis accusantium ut.
            Unde debitis, voluptatem tempora quae, perspiciatis eveniet rem aut
            fuga, totam possimus recusandae ad dolorem iure vitae adipisci quo
            hic nemo corporis.
          </li>
        </ul>
        <Accordion
          type="single"
          collapsible
          className="w-[50%] border-1 border-primary z-10"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-xl">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="w-[50%] border-1 border-primary z-10"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum repudiandae dolores corrupti totam adipisci quia ad
              beatae recusandae, quisquam vero aliquid possimus nostrum sed
              perspiciatis odio blanditiis earum, voluptates nemo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="w-[50%] border-1 border-primary z-10"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Information;
