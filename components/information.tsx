import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Information = () => {
  const stats = [
    {
        data: "35M",
        title: "Population"
    },
    {
        data: "10K+",
        title: "Work holiday Limits"
    },
    {
        data: "3+",
        title: "Months"
    },
    {
        data: "30$+",
        title: "Minimum Salary"
    },
]
  return (
    <section className="relative overflow-y-visible">
      <div className="flex flex-col gap-y-3 mt-10 ml-10">
        <h2 className="text-2xl font-bold">Working Holiday in Canada</h2>
        <div className="mt-10 pt-2 flex flex-col sm:flex-row sm:flex-wrap gap-y-10 justify-center items-center gap-x-3 lg:divide-x">
        {stats.map((stat)=>(
          <ul key={stat.title} className="text-center flex flex-col gap-y-2 px-12 md:px-16">
            <h3 className="text-primary text-2xl font-semibold">{stat.data}</h3>
            <p className="text-nowrap text-semibold font-medium">{stat.title}</p>
          </ul>
        ))}
        </div>
        <ul className="gap-y-1 mt-10 flex flex-col z-10 font-md leading-loose">
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
        <div className="text-primary mt-3 font-bold text-lg outline-2 outline-primary rounded-xl">Checklist to Canada</div>
      </div>
    </section>
  );
};

export default Information;
