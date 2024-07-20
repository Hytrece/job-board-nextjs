import Header from "@/components/header";
import Information from "@/components/information";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image"
import JobButton from "@/components/jobbutton";
import FeatureCard from "@/components/featurecard";
import { Separator } from "@/components/ui/separator";

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
  return (<div className="overflow-hidden">
    <Header name="Canada" bg="/canadabg.jpg"/>
    <TracingBeam className="px-1">
      <Information/>
      <section className="w-full mt-36 mx-auto px-4 md:px-8">
        <div className="max-w-xl">
            <h1 className="text-2xl font-bold sm:text-2xl">
                Jobs
            </h1>
            <p className="mt-5 leading-loose">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.
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
      <section className="h-screen mt-36">
        <h1 className="mx-9 font-bold text-2xl">Key Features</h1>
        <div className="flex justify-around gap-x-8 mt-9 p-10 bg-zinc-200 w-full rounded-lg">
          <div className="bg-white rounded-lg w-full h-[500px] p-5 flex flex-col items-center gap-y-6">
            <div className="rounded-full border-4 border-primary w-[200px] h-[200px] mt-2">
            </div>
              <h1 className="text-xl font-bold mt-4">Lorem ipsum dolor </h1>
              <p className="text-center text-semibold leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consectetur soluta nemo delectus dignissimos accusantium eaque quos exercitationem qui quaerat!</p>
          </div>
          <Separator className="font-semibold bg-zinc-400" orientation="vertical" />
          <div className="bg-white rounded-lg w-full h-[500px] p-5 flex flex-col items-center gap-y-6">
          <div className="rounded-full border-4 border-primary w-[200px] h-[200px] mt-2">
            </div>
              <h1 className="text-xl font-bold mt-4">Lorem ipsum dolor </h1>
              <p className="text-center text-semibold leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consectetur soluta nemo delectus dignissimos accusantium eaque quos exercitationem qui quaerat!</p>
          </div>
          <Separator className="font-semibold bg-zinc-400" orientation="vertical" />
          <div className="bg-white rounded-lg w-full h-[500px] flex p-5 flex-col items-center gap-y-6">
          <div className="rounded-full border-4 border-primary w-[200px] h-[200px] mt-2">
            </div>
              <h1 className="text-xl font-bold mt-4">Lorem ipsum dolor </h1>
              <p className="text-center text-semibold leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consectetur soluta nemo delectus dignissimos accusantium eaque quos exercitationem qui quaerat!</p>
          </div>
        </div>
      </section>
    </TracingBeam>
  </div>);
};

export default Canada;
