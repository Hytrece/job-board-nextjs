import mongoose, { ObjectId } from "mongoose";
import Country from "@/utils/country-schema";
import { Suspense } from "react";
import Image from "next/image";
import { BedSingle, MoveRight, TrafficCone ,Code, Tractor, HandCoins, LampDesk,Heart} from "lucide-react";
import Link from "next/link";
import { Coffee } from 'lucide-react';
import { auth, redirectToSignIn } from '@clerk/nextjs/server'
import { Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious, } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import JobsearchBar from "@/components/jobsearchbar";
import ComboboxForm from "@/components/comboboxforjob";
import { BreadcrumbDemo } from "@/components/breadcrumbs";
import ToKorean from "@/components/tokorean";
import {BackgroundGradientDemo} from "@/components/cta";
import { CareerJetCta } from "@/components/careerjetcta";
import { RedirectToSignIn } from "@clerk/nextjs";
import User from "@/lib/models/user.model";
import LikeButton from "@/components/likebutton";
async function connectToDB(){
        try {
        const connection = await mongoose.connect(
          "mongodb+srv://hdh4063:h1234512345@cluster0.q1izzip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        );
        console.log("mongoDB connected");
      } catch (error) {
        console.log(error);
      }
}
const JobPage = async ({searchParams}:{searchParams:{[key:string]:string | string[] | undefined}}) => {
    const pageNum = (searchParams.page ?? "1") as string;
    const pageNumInt = +pageNum;
    const industry = (searchParams.category ?? "none") as string;
    const query = (searchParams.q ?? "") as string;
    let type = "";
    let salary="";
    console.log(industry);
    const mongo = await connectToDB();
    const s = query;
    const regex = RegExp(s,'i');
    const joblist = industry == "none" ? await Country.find({country:"australia", title: {$regex: regex}}).lean().skip((pageNumInt-1)*20).limit(20) : await Country.find({country:"australia",category:industry,title: {$regex: regex}}).lean().skip((pageNumInt-1)*20).limit(20);
    const nextPage = industry == "none" ? await Country.find({country:"australia",title: {$regex: regex}}).lean().skip((pageNumInt)*20).countDocuments() : await Country.find({country:"australia",category:industry,title: {$regex: regex}}).lean().skip((pageNumInt)*20).countDocuments();
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
    function checkNullandCall(param:Param){
      let returnObject = new Map()
      if(param.industry!="none"){
        returnObject.set("category",param.industry);
      }
      if(param.s!="" || param.s==undefined){
        returnObject.set("q" ,param.s);
      }
      if(param.page!="1"){
        returnObject.set("page",param.page);
      }
      if(param.type!="none" || param.type==undefined){
        returnObject.set("type",param.type);
      }
      if(param.salary=="true"){
        returnObject.set("salary","true")
      }
      return new URLSearchParams(Object.fromEntries(returnObject));
    }
    function formatDate(input: string): string {
      // Create a Date object from the input string
      const date = new Date(input);
  
      // Define options for formatting the date
      const options: Intl.DateTimeFormatOptions = {
          day: '2-digit',
          month: 'short'
      };
  
      // Format the date using the options
      const formattedDate = date.toLocaleDateString('en-GB', options); // 'en-GB' gives "01 Aug", 'en-US' would give "Aug 01"
  
      return formattedDate;
  } 
    interface User{
      clerkId:string,
      email:string,
      username:string,
      photo:string,
      firstName:string,
      lastName:string,
      savedJobs:string[],
      savedWh:string[]
    }
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
          {joblist.length == 0 ? 
            <div className="text-primary w-full flex justify-center mt-16 text-3xl font-semibold">No results found</div> :
            <ul className=" ml-5">
              {joblist.map((job)=>(
                <div key = {job.url}>
                  <div key={job.url} className="w-full min-h-[150px] group hover:cursor-pointer mb-5 bg-zinc-100 border-2 rounded-md border-zinc-200 ">
                    <div className="flex pt-5 pb-5 px-4 justify-between">
                      <div className="flex flex-col gap-y-4">
                        <div className="flex items-center group gap-x-4 ">
                          <h1 className="font-bold text-lg max-w-[500px]" >{job.title}</h1>
                          <LikeButton jobId = {JSON.parse(JSON.stringify(job._id))}/>
                        </div>
                        <div className="flex items-center gap-x-5"><div className={`text-primary rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max`}>{formatDate(job.date)}</div><div className={`text-pink-600 rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max ${job.salary==""? "hidden":""}`}>{job.salary}</div></div>
                        <div className="flex items-center gap-x-5"><div className="text-indigo-600 rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max">{`${job.category.charAt(0).toUpperCase()+job.category.slice(1)}`}</div><div className="text-amber-600 rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max">Contract</div></div>
                      </div>
                      <div className="flex flex-col text-muted-foreground w-[30%] gap-y-4">
                        <div className="flex gap-x-2 items-center">
                          <Image src="/business.svg" width={20} height={20} alt="city"/>
                          <h2 className="font-medium">{job.company}</h2>
                        </div>
                        <div className="flex gap-x-2 items-center">
                          <Image src="/location.svg" width={20} height={20} alt="company"/>
                          <p className="font-medium">{job.location}</p>
                        </div>
                        <Link href = {job.url} className="text-indigo-600 font-semibold flex gap-x-1 mt-8">
                          Continue with CareerJet
                          <MoveRight className="transition w-[20px] transform group-hover:translate-x-1 duration-100"/>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                )
              )
            }
            </ul>
          }
          <Pagination className="mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href={`?${checkNullandCall({page:`${pageNumInt-1}`,industry:industry,s:s,type:"none"})}`} className={pageNum == "1"? "hidden": "text-center min-w-[100px] bg-indigo-400 rounded-lg p-2 hover:bg-indigo-500 hover:text-white"}/>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href={`?${checkNullandCall({page:`${pageNumInt+1}`,industry:industry,s:s,type:"none"})}`} className={nextPage == 0? "hidden": "text-center min-w-[100px] bg-indigo-400 rounded-lg p-2 hover:bg-indigo-500 hover:text-white"} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        </Suspense>
        </div>
      </section>
    )
}
export default JobPage;