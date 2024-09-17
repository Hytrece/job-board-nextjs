import Header from "@/components/header";
import Information from "@/components/information";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image"
import CheckList from "@/components/checklist";
import Charts from "@/components/charts";
import MoreJobs from "@/components/morejobs";
import Subscribe from "@/components/subscribe";
import Link from "next/link";
import { CardSpotlight } from "@/components/ui/card-reveal";
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
          <div className="flex gap-x-7 items-center">
            <h1 className="text-2xl font-bold mt-5 sm:text-2xl">
              Jobs in Canada
            </h1>
            <MoreJobs/>
          </div>
            <p className="mt-5 leading-loose">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy.
            </p>
        </div>
          <div className="mt-12">
              <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {
                      Jobs.map((item, idx) => (
                          <li key={idx} className="gap-8 flex hover:cursor-pointer flex-col">
                            <Link href={{pathname:"/canada/jobs", query:{category:(item.name).toLowerCase()}}} className="group">
                              <div className="w-full h-60 overflow-hidden rounded-xl relative">
                                <div className="w-full h-60 relative transition transform rounded-xl duration-700 group-hover:scale-110 group-hover:cursor-pointer">
                                  <Image
                                      src={item.src}
                                      className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                      alt="jobpic"
                                      fill = {true}
                                      
                                  />
                                  </div>
                              </div>
                              <div className="mt-4 sm:mt-0 hover:cursor-pointer">
                                  <h4 className="text-lg font-semibold">{item.name}</h4>
                                  <p className="text-primary">1000+ Jobs</p>
                                  <p className="mt-2">{`Average Salary: ${item.avg}`}</p>
                              </div>
                            </Link>
                          </li>
                      ))
                  }
              </ul>
          </div>
      </section>
      <section className="w-full mt-28 mx-auto px-4 py-7 md:px-8">
        <div className="max-w-xl">
          <h4 className="text-primary font-semibold text-lg">Benefits</h4>
          <div className="flex gap-x-7 items-center">
            <h1 className="text-2xl font-bold mt-5 sm:text-2xl">
              Benefits of working holiday in Canada
            </h1>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-2 w-full rounded-xl overflow-hidden bg-zinc-800">
          <div className="grid grid-cols-2 py-32 px-10">
            {features.map((feature,index)=>(
              <div key={index}>
                <CardSpotlight  className="px-8 py-20 flex flex-col gap-y-8 ">
                  <div className="bg-violet-600 text-white w-16 h-16 rounded-full z-10 flex justify-center items-center text-2xl font-bold">{index}</div>
                  <div className="text-white text-lg font-semibold z-10 leading-loose">
                    {feature.desc}
                  </div>
                </CardSpotlight>
              </div>
            ))}
          </div>
          <div className="w-full h-full relative">
            <Image src="/canada_benefit_1.jpg" fill={true} className="brightness-75" alt="tower" objectFit="cover"/>
          </div>
        </div>
      </section>
      <CheckList features={features}/>
      <Charts/>
      <Subscribe country="Canada"/>
    </TracingBeam>
  </div>);
};

export default Canada;
