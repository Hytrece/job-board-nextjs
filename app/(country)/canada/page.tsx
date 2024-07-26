import Header from "@/components/header";
import Information from "@/components/information";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image"
import JobButton from "@/components/jobbutton";
import FeatureCard from "@/components/featurecard";
import { Separator } from "@/components/ui/separator";
import CheckList from "@/components/checklist";
import Charts from "@/components/charts";

const Canada = () => {
  const Jobs = [
    {
      name:"Cafe & Restaurant",
      src:"/cafe.jpg",
      avg:"1000000"
    },
    {
      name:"Hotel",
      src:"/hotel.jpg",
      avg:"1500000"
    },
    {
      name:"Farm",
      src:"/farm.jpg",
      avg:"2000000"
    },
    {
      name:"Labors",
      src:"/construction.jpg",
      avg:"2000000"
    },
    {
      name:"Retail & Office",
      src:"/office.jpg",
      avg:"1700000"
    },
    {
      name:"More",
      src:"/more.jpg"
    }
  ]
  const features = [
    {
        title: "Fast Refresh",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
    },
    {
        title: "Analytics",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
    },
    {
        title: "Datacenter security",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
    },
    {
        title: "Build on your terms",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
    }
]
  return (<div className="overflow-hidden">
    <Header name="Canada" bg="/canadabg.jpg"/>
    <TracingBeam className="px-1">
      <Information/>
      <section className="w-full mt-28 mx-auto px-4 py-7 md:px-8">
        <div className="max-w-xl">
          <h4 className="text-primary font-semibold text-lg">Search</h4>
            <h1 className="text-2xl font-bold mt-5 sm:text-2xl">
              Jobs in Canada
            </h1>
            <p className="mt-5 leading-loose">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy.
            </p>
        </div>
          <div className="mt-12">
              <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {
                      Jobs.map((item, idx) => (
                          <li key={idx} className="gap-8 flex flex-col">
                              <div className="w-full h-60 relative hover:cursor-pointer">
                                  <Image
                                      src={item.src}
                                      className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                      alt="jobpic"
                                      fill = {true}
                                      
                                  />
                              </div>
                              <div className="mt-4 sm:mt-0 hover:cursor-pointer">
                                  <h4 className="text-lg font-semibold">{item.name}</h4>
                                  <p className="text-primary">1000+ Jobs</p>
                                  <p className="mt-2">{`Average Salary: ${item.avg}`}</p>
                              </div>
                          </li>
                      ))
                  }
              </ul>
          </div>
      </section>
      <CheckList features={features}/>
      <Charts/>
    </TracingBeam>
  </div>);
};

export default Canada;
