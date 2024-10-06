import { checkNullandCall } from "@/lib/utils";
import { Suspense } from "react";
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
import { X } from "lucide-react";

const JobPage = async ({searchParams}:{searchParams:{[key:string]:string | string[] | undefined}}) => {
    var pageNum = (searchParams.page ?? "1") as string;
    const pageNumInt = +pageNum;
    const industry = (searchParams.category ?? "none") as string;
    const query = (searchParams.q ?? "") as string;
    const type = (searchParams.type ?? "") as string;
    const filters = [industry,query,type];
    console.log(type);
    const s = query;
    const categories = [
      {
        name:"Cafe & Barista",
        icon:<Coffee/>,
        link:"cafe"
      },
      {
        name:"Hotel",
        icon:<BedSingle/>,
        link:"hotel"

      },
      {
        name:"Labours",
        icon:<TrafficCone/>,
        link:"construction"
      },
      {
        name:"Developer",
        icon:<Code/>,
        link:"developer"
      },
      {
        name:"Farm",
        icon:<Tractor/>,
        link:"farm"
      },
      {
        name:"Office",
        icon:<LampDesk/>,
        link:"office"
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
    const {joblist, nextPage} = await fetchJob({industry,s,pageNumInt,type});
    return(
      <section className="min-h-screen w-[80%] max-h-[500vh]">
        <BreadcrumbDemo prev={[{href:"/canada",name:"Canada"}]} now={{href:"/canada/jobs",name:"Jobs"}} classname="mt-32 pt-7 ml-10"/>
        <div className="items-center grid grid-cols-4 " >
          <div className="text-xl md:text-3xl font-bold pt-5 pb-10 flex mx-5 w-full col-span-1">
              <div className=" p-2 rounded-full border-2 w-full bg-indigo-400 h-max shadow-md mr-10 flex justify-center mt-5 ">
                <ComboboxForm/>
              </div>
          </div>
          <div className="w-full flex flex-col justify-start pt-3 pb-10 pl-4 col-span-3">
            <h1 className="font-bold text-xl ml-1">Job Search</h1>
            <div className="bg-zinc-100 border-2 border-zinc-200 p-3 flex flex-col lg:flex-row gap-y-5 items-center gap-x-5 py-5 w-full mt-3 ml-1 rounded-lg"><JobsearchBar/><ToKorean/></div>
          </div>
        </div>
        <div className="w-full grid items-start grid-cols-4">
          <div className=" ml-5 col-span-1 ">
            <h1 className="ml-5 mt-1 font-bold text-xl">Category</h1>
            <div className="mt-6 pl-5 bg-zinc-100 shadow-md pt-1 border-2 border-zinc-200 rounded-lg mr-5 pb-5 pr-5">
              <div className="mt-5 flex text-foreground font-semibold flex-col">
                {categories.map((category)=>(
                  <Link key={category.name} href = {`?${new URLSearchParams({category:category.link})}`} className={cn(industry == category.link ? "bg-black text-white hover:text-white hover:bg-black" : " hover:bg-zinc-200 active:bg-zinc-300","py-3 pl-2 flex items-center rounded-md hover:cursor-pointer gap-x-3")}>{category.icon}{category.name}</Link>
                ))}
              </div>
            </div>
            <h1 className="ml-5 mt-10 font-bold text-xl">Job type</h1>
            <div className="mt-5 px-5 bg-zinc-100 shadow-md py-5 border-2 border-zinc-200 rounded-lg mr-5">
                {workType.map((work,index)=>(
                  <Link key={index} href={`?${checkNullandCall({industry:industry, type:work.type, s:s, page:"1"})}`} className={cn(type == work.type? "bg-black text-white hover:text-white hover:bg-black":"hover:bg-violet-300","py-3 pl-2 flex font-bold items-center rounded-md hover:cursor-pointer gap-x-3")}>{work.name}</Link>
                ))}
            </div>
            <div className="mt-20 mr-5"><BackgroundGradientDemo/></div>
            <div className="mt-10 mr-5"><CareerJetCta/></div>
          </div>
        <div className="col-span-3">
          <div className="flex items-center gap-x-10">
            <h1 className="ml-5 mb-5 text-xl font-bold">{industry=="none" ? `Jobs` : `${industry.charAt(0).toUpperCase() + industry.slice(1)} Jobs`}</h1>
              <div className={cn(industry == "" || industry=="none" ? "hidden" : " mb-5 min-w-[100px] py-2 bg-indigo-200 flex justify-center px-2 w-max" ," relative group text-sm text-indigo-600 shadow-1 shadow-r shadow-b shadow-lg rounded-md")}>
                {
                  industry.charAt(0).toUpperCase() + industry.slice(1)
                }
                <Link href={`?${checkNullandCall({industry:"none",type:type,s:s,page:"1"})}`}className="absolute top-0 right-0 p-[0.5px] w-4 h-4 rounded-full flex justify-center items-center bg-indigo-700 hover:cursor-pointer group-hover:scale-110 animate duration-300 translate-x-1/4 -translate-y-1/4 text-white text-sm"><X className="group-hover:scale-110"/></Link>
              </div>
              <div className={cn(query == "" || query=="none" ? "hidden" : " mb-5 min-w-[100px] py-2 bg-indigo-200 flex justify-center w-max px-2" ," relative group text-sm text-indigo-600 shadow-1 shadow-r shadow-b shadow-lg rounded-md")}>
                {
                  `"${query}" Jobs`
                }
                <Link href={`?${checkNullandCall({industry:industry,type:type,s:"",page:"1"})}`}className="absolute top-0 right-0 p-[0.5px] w-4 h-4 rounded-full flex justify-center items-center bg-indigo-700 hover:cursor-pointer group-hover:scale-110 animate duration-300 translate-x-1/4 -translate-y-1/4 text-white text-sm"><X className="group-hover:scale-110"/></Link>
              </div>
              <div className={cn(type == "" || type=="none" ? "hidden" : " mb-5 min-w-[100px] py-2 bg-indigo-200 flex justify-center px-2 w-max" ," relative group text-sm text-indigo-600 shadow-1 shadow-r shadow-b shadow-lg rounded-md")}>
                {
                  type=="p"?"Permanent":"Contract"
                }
                <Link href={`?${checkNullandCall({industry:industry,type:"",s:s,page:"1"})}`}className="absolute top-0 right-0 p-[0.5px] w-4 h-4 rounded-full flex justify-center items-center bg-indigo-700 hover:cursor-pointer group-hover:scale-110 animate duration-300 translate-x-1/4 -translate-y-1/4 text-white text-sm"><X className="group-hover:scale-110"/></Link>
              </div>
          </div>
          <JobList joblist={joblist} nextPage={nextPage} industry={industry} s={s} pageNum={pageNum} type={type}/>
        </div>
        </div>
      </section>
    )
}
export default JobPage;