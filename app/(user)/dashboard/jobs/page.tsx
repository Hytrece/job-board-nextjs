import { connectToDB } from "@/lib/db";
import User from "@/lib/models/user.model";
import { MidTypePopulate } from "@/lib/types/jobtype";
import { auth } from "@clerk/nextjs/server";
import { formatDate,cn } from "@/lib/utils";
import { Loader,MousePointer2,Speech,PartyPopper } from 'lucide-react';
import Image from "next/image"
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Country from "@/lib/models/country-schema";
import { BreadcrumbDemo } from "@/components/breadcrumbs";
import { Search,X} from 'lucide-react';
import DeleteJobButton from "@/components/deletejob";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import ArrowButton from "@/components/arrowbutton";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
const status = [
    {
        index:0,
        status:"not applied",
        class:"bg-amber-100 text-amber-600",
        icon:<Loader/>
    },
    {
        index:1,
        status:"applied",
        class:"bg-indigo-100 text-indigo-600",
        icon:<MousePointer2/>
    },
    {
        index:2,
        status:"interviewed",
        class:"bg-orange-100 text-orange-600",
        icon:<Speech/>
    },
    {
        index:3,
        status:"accepted",
        class:"bg-green-100 text-green-600",
        icon:<PartyPopper/>
    },
]
async function SavedJobPage() {
    const {userId} = auth().protect()
    await connectToDB();
    let joblist:MidTypePopulate[] = []
    if(!userId){return null;}
    else{
        const temp = await Country.find({})
        const userJob = await User.findOne({id:userId}).populate('savedJobs.job');        
        joblist = userJob.savedJobs?? [];
    }
    return(
        <section className="w-full relative min-h-screen overflow-y-auto">
            <div className="mt-16 absolute relative left-[10%]">
                <BreadcrumbDemo prev={[{href:"/dashboard",name:"Dashboard"}]} now={{href:"/dashboard/jobs",name:"Saved Jobs"}} classname="mb-6"/>
                <div className="flex items-center gap-x-7">
                    <h1 className="font-bold text-3xl">Saved Jobs</h1>
                    <div className="bg-zinc-200 text-black font-bold text-3xl p-3 rounded-full">{joblist.length}</div>
                </div>
                {joblist.length == 0 ? (<div className="mt-10">Add Jobs</div>):
                    <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-5 w-max">
                        {joblist.map((elem,index)=>(
                            <div key = {index} className="flex group/total">
                                <div key={elem.job.url} className="w-[300px] z-10 h-max group relative hover:cursor-pointer mb-5 bg-white border-2 border-zinc-200 ">
                                    <Dialog>
                                        <DialogTrigger>
                                        <div className="w-[300px] h-full flex flex-col items-center gap-y-3 pt-5 pb-5 ">
                                            <div className="w-10 h-10 relative overflow-hidden rounded-full border-2 border-zinc-500 z-10"><Image src={`/${elem.job.country}.png`} fill={true} objectFit="cover" alt="flag" className="z-10"/></div>
                                            <h1 className="font-bold text-lg text-center px-2 " >{elem.job.title}</h1>
                                            <div className={cn(status.find((stat)=>stat.index==elem.status)?.class,"font-medium flex gap-x-2 items-center rounded-full w-max px-3 py-1")}>
                                                {status.find((stat)=>stat.index==elem.status)?.icon}
                                                {status.find((stat)=>stat.index==elem.status)?.status}
                                            </div>
                                            <div className="flex flex-col mt-3 text-muted-foreground gap-y-4">
                                            <div className="flex gap-x-2 text-zinc-900 items-center bg-zinc-200 rounded-full py-2 px-3">
                                                <Image src="/business.svg" width={20} height={20} alt="city"/>
                                                <h2 className="font-medium">{elem.job.company}</h2>
                                            </div>
                                            <div className="flex gap-x-2 items-center text-zinc-900 bg-zinc-200 rounded-full py-2 px-3">
                                                <Image src="/location.svg" width={20} height={20} alt="company"/>
                                                <p className="font-medium">{elem.job.location}</p>
                                            </div>
                                            </div>
                                        </div>
                                        </DialogTrigger>
                                        <DialogContent className="md:max-w-[700px] lg:max-w-[1200px]">
                                            <DialogHeader>
                                            <DialogTitle className="text-2xl">Job Apply Progress</DialogTitle>
                                            <DialogDescription>
                                            </DialogDescription>
                                            </DialogHeader>
                                            <div className="flex items-center justify-center mt-7 w-full px-1 md:px-3 lg:px-5 px-auto gap-x-0">
                                                    {status.map((stat)=>(
                                                        <div key={stat.index} >
                                                        <ArrowButton current = {elem.status as number} text={stat.status} index={stat.index} jobId = {elem.job._id.toString()}/>
                                                        </div>
                                                    ))}
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <div className="w-full flex justify-center pb-3">
                                        <Link href = {elem.job.url} className="text-indigo-600 p-1 rounded-full bg-white w-max px-4 animate border-2 border-white hover:border-indigo-600 hover:bg-indigo-600 hover:text-white duration-500 font-semibold flex gap-x-1">
                                            Continue with CareerJet
                                            <MoveRight className="transition w-[20px] transform group-hover:translate-x-1 duration-100"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex-col flex gap-y-0 h-max items-center animate transition -translate-x-20 duration-500 group-hover/total:-translate-x-9 rounded-md ">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Link href={`../canada/jobs?${new URLSearchParams({category:elem.job.category})}`} className="bg-indigo-500 px-1 pl-10 flex flex-col justify-center py-9 text-white font-semibold hover:opacity-80 hover:cursor-pointer"><Search/></Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Search similar jobs</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <DeleteJobButton jobId={elem.job._id.toString()}/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Delete job</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </div>
                          </div>
                        ))}
                    </ul>
                }
                
            </div>
    </section>
    )
}
export default SavedJobPage;