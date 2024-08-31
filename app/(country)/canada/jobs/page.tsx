
import { Suspense } from "react";
import { Document } from "mongoose";
import { BedSingle, TrafficCone ,Code, Tractor, HandCoins, LampDesk} from "lucide-react";
import Link from "next/link";
import { Coffee } from 'lucide-react';
import { cn } from "@/lib/utils";
import JobsearchBar from "@/components/jobsearchbar";
import ComboboxForm from "@/components/comboboxforjob";
import { BreadcrumbDemo } from "@/components/breadcrumbs";
import ToKorean from "@/components/tokorean";
import {BackgroundGradientDemo} from "@/components/cta";
import { CareerJetCta } from "@/components/careerjetcta";
import JobList from "@/components/joblist";
import { fetchJob } from "@/actions/jobs.actions";

const JobPage = async ({searchParams}:{searchParams:{[key:string]:string | string[] | undefined}}) => {
    const pageNum = (searchParams.page ?? "1") as string;
    const pageNumInt = +pageNum;
    const industry = (searchParams.category ?? "none") as string;
    const query = (searchParams.q ?? "") as string;
    console.log(industry);
    const s = query;
    const categories = [
      {
        name:"Barista",
        icon:<Coffee/>
      },
      {
        name:"Hotel",
        icon:<BedSingle/>
      },
      {
        name:"Labours",
        icon:<TrafficCone/>
      },
      {
        name:"Developers",
        icon:<Code/>
      },
      {
        name:"Farm",
        icon:<Tractor/>
      },
      {
        name:"Retail",
        icon:<HandCoins/>
      },
      {
        name:"Office",
        icon:<LampDesk/>
      }
    ]
    const workType = [
      {
        name:"All",
        type:""
      },
      {
        name:"Permanent",
        type:"p",
      },
      {
        name:"Contract",
        type:"c",
      }
    ]
    interface Param{
      industry?:string | "none",
      s?: string | "",
      page?:string | "1",
      type?:string | "none",
      salary?:string | "false"
    };
    const {joblist, nextPage} = await fetchJob({industry,s,pageNumInt});
    const toObjects = <T extends Document>(
      documents: T[],
    ): Omit<T, keyof Document>[] =>
      documents.map((document) => document.toObject({ flattenObjectIds: true }));
    return(
      <section className="min-h-screen w-[80%] max-h-[500vh]">
        <BreadcrumbDemo prev={[{href:"/canada",name:"Canada"}]} now={{href:"/canada/jobs",name:"Jobs"}}/>
        <div className="items-center grid grid-cols-4 " >
          <div className="text-xl md:text-3xl font-bold pt-5 pb-10 flex mx-5 w-full col-span-1">
              <div className=" p-2 rounded-full border-2 w-full bg-indigo-400 h-max shadow-md mr-10 flex justify-center mt-5 ">
                <ComboboxForm/>
              </div>
          </div>
          <div className="w-full flex flex-col justify-start pt-5 pb-10 pl-4 col-span-3">
            <h1 className="font-bold text-xl ml-1">Job Search</h1>
            <div className="bg-zinc-100 border-2 border-zinc-200 p-3 flex flex-col lg:flex-row gap-y-5 items-center gap-x-5 py-5 w-full mt-3 ml-1 rounded-lg"><JobsearchBar/><ToKorean/></div>
          </div>
        </div>
        <div className="w-full grid grid-cols-4">
          <div className=" ml-5 col-span-1 ">
            <h1 className="ml-5 font-bold text-xl">Category</h1>
            <div className="mt-5 pl-5 bg-zinc-100 shadow-md pt-1 border-2 border-zinc-200 rounded-lg mr-5 pb-5 pr-5">
              <div className="mt-5 flex text-foreground font-semibold flex-col">
                {categories.map((category)=>(
                  <Link key={category.name} href = {`?${new URLSearchParams({category:category.name.toLowerCase()})}`} className={cn(industry == category.name.toLowerCase() ? "bg-black text-white hover:text-white hover:bg-black" : " hover:bg-violet-300 ","py-3 pl-2 flex items-center rounded-md hover:cursor-pointer gap-x-3")}>{category.icon}{category.name}</Link>
                ))}
              </div>
            </div>
            <h1 className="ml-5 mt-10 font-bold text-xl">Job type</h1>
            <div className="mt-5 px-5 bg-zinc-100 shadow-md py-5 border-2 border-zinc-200 rounded-lg mr-5">
                {workType.map((work,index)=>(
                  <Link key={index} href={`?${new URLSearchParams({type:work.type, category:industry, q:s})}`} className="py-3 pl-2 flex font-bold items-center rounded-md hover:bg-violet-300 hover:cursor-pointer gap-x-3">{work.name}</Link>
                ))}
            </div>
            <div className="mt-20 mr-5"><BackgroundGradientDemo/></div>
            <div className="mt-10 mr-5"><CareerJetCta/></div>
          </div>
        <Suspense fallback = "loading...">
        <div className="col-span-3">
          <h1 className="ml-5 mb-5 text-xl font-bold">{industry=="none" ? `${query} Jobs` : `${industry.charAt(0).toUpperCase() + industry.slice(1)} Jobs`}</h1>
          <JobList joblist={joblist} nextPage={nextPage} industry={industry} s={s} pageNum={pageNum}/>
        </div>
        </Suspense>
        </div>
      </section>
    )
}
export default JobPage;