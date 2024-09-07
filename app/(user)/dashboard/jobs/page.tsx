import { connectToDB } from "@/lib/db";
import User from "@/lib/models/user.model";
import { JobType } from "@/lib/types/jobtype";
import { auth } from "@clerk/nextjs/server";
import { formatDate,cn } from "@/lib/utils";
import Image from "next/image"
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Country from "@/lib/models/country-schema";
import { BreadcrumbDemo } from "@/components/breadcrumbs";
import { Search,X } from 'lucide-react';
import DeleteJobButton from "@/components/deletejob";

async function SavedJobPage() {
    const {userId} = auth().protect()
    await connectToDB();
    let joblist:JobType[];
    if(!userId){return null;}
    else{
        const temp = await Country.find({})
        const userJob = await User.findOne({id:userId}).populate('savedJobs');        
        joblist = userJob.savedJobs;
    }
    return(
        <section className="w-full relative min-h-screen overflow-y-auto">
            <div className="mt-16 absolute relative left-[10%] ">
                <BreadcrumbDemo prev={[{href:"/dashboard",name:"Dashboard"}]} now={{href:"/dashboard/jobs",name:"Saved Jobs"}} classname="mb-6"/>
                <div className="flex items-center gap-x-7">
                    <h1 className="font-bold text-3xl">Saved Jobs</h1>
                    <div className="bg-zinc-200 text-black font-bold text-3xl p-3 rounded-full">{joblist.length}</div>
                </div>
                {joblist.length == 0 ? (<div className="mt-10">Add Jobs</div>):
                    <ul className="mt-10 flex flex-col items-start gap-y-4 w-full">
                        {joblist.map((job,index)=>(
                            <div key = {index} className="flex group/total">
                                <div key={job.url} className="w-[70%] md:w-[600px] z-10 lg:min-w-[1000px] h-[180px] group hover:cursor-pointer mb-5 bg-white border-2 border-zinc-200 ">
                                    <div className="flex pt-5 pb-5 px-4 justify-between">
                                        <div className="flex flex-col gap-y-4">
                                        <div className="flex items-center group gap-x-4 min-h-[30px]">
                                            <h1 className="font-bold text-lg max-w-[500px]" >{job.title}</h1>
                                            <div className="w-9 h-7 relative overflow-hidden rounded-md z-10"><Image src={`/${job.country}.png`} fill={true} objectFit="cover" alt="flag" className="z-10"/></div>
                                        </div>
                                        <div className="flex items-center gap-x-5"><div className={`text-primary rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max`}>{formatDate(job.date)}</div><div className={`text-pink-600 rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max ${job.salary==""? "hidden":""}`}>{job.salary}</div></div>
                                        <div className="flex items-center gap-x-5"><div className="text-indigo-600 rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max">{`${job.category.charAt(0).toUpperCase()+job.category.slice(1)}`}</div><div className={cn(job.contracttype=="p"?"text-violet-600":"text-amber-600"," rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max")}>{
                                            job.contracttype=="p"?
                                            "Permanent":
                                            "Contract"
                                        }</div></div>
                                        </div>
                                        <div className="flex flex-col text-muted-foreground gap-y-4">
                                        <div className="flex gap-x-2 items-center">
                                            <Image src="/business.svg" width={20} height={20} alt="city"/>
                                            <h2 className="font-medium">{job.company}</h2>
                                        </div>
                                        <div className="flex gap-x-2 items-center">
                                            <Image src="/location.svg" width={20} height={20} alt="company"/>
                                            <p className="font-medium">{job.location}</p>
                                        </div>
                                        <Link href = {job.url} className="text-indigo-600 p-1 rounded-full bg-white w-max px-4 animate border-2 border-white hover:border-indigo-600 hover:bg-indigo-600 hover:text-white duration-500 font-semibold flex gap-x-1 mt-8">
                                            Continue with CareerJet
                                            <MoveRight className="transition w-[20px] transform group-hover:translate-x-1 duration-100"/>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[180px] flex flex-col gap-y-0 items-center animate transition -translate-x-20 duration-500 group-hover/total:-translate-x-9 rounded-md overflow-hidden ">
                                    <Link href={`../canada/jobs?${new URLSearchParams({category:job.category})}`} className="bg-indigo-500 px-1 pl-10 flex flex-col justify-center h-full text-white font-semibold hover:opacity-80 hover:cursor-pointer"><Search/></Link>
                                    <DeleteJobButton jobId={job._id.toString()}/>
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