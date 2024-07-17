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
      src:"/cafe.jpg"
    },
    {
      name:"Hotel",
      src:"/hotel.jpg"
    },
    {
      name:"Farm",
      src:"/farm.jpg"
    },
    {
      name:"Labors",
      src:"/construction.jpg"
    },
    {
      name:"Retail & Office",
      src:"/office.jpg"
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
        <div className="flex flex-col">
          <h1 className="mx-9 pt-12 font-bold text-2xl">Jobs</h1>
          <div className="grid w-[90%] grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-8 mx-auto -translate-x-[15px]">
            {Jobs.map((job)=>(
              <JobButton job = {job} num="100" key={job.name}/>
            ))}
          </div>
        </div>
      <div className="h-screen">
        <h1 className="mx-9 pt-12 font-bold text-2xl">Key Features</h1>
        <div className="flex justify-around mt-9 p-10 bg-zinc-200 w-full rounded-lg">
          <div className="bg-white rounded-lg w-[300px] h-[450px] p-3 flex flex-col justify-center items-center gap-y-5">
            <div className="rounded-full border-4 border-primary w-[200px] h-[200px]">
            </div>
              <p className="text-center text-semibold leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consectetur soluta nemo delectus dignissimos accusantium eaque quos exercitationem qui quaerat!</p>
          </div>
          <Separator className="font-semibold bg-zinc-400" orientation="vertical" />
          <div className="bg-white rounded-lg w-[300px] h-[450px] flex flex-col justify-center items-center gap-y-5">
            <div className="rounded-full border-4 border-primary w-[200px] h-[200px]"></div>
          </div>
          <Separator className="font-semibold bg-zinc-400" orientation="vertical" />
          <div className="bg-white rounded-lg w-[300px] h-[450px] flex flex-col justify-center items-center gap-y-5">
            <div className="rounded-full border-4 border-primary w-[200px] h-[200px]"></div>
          </div>
        </div>
      </div>
    </TracingBeam>
  </div>);
};

export default Canada;
