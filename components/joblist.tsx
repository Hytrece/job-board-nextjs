"use client"
import { Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious, } from "@/components/ui/pagination";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { saveJob } from "@/actions/jobs.actions";
import { cn } from "@/lib/utils";
import { checkNullandCall,formatDate} from "@/lib/utils";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { LoaderCircle } from 'lucide-react';
import {useState} from "react";
import { Check } from 'lucide-react';
import { CircleX } from 'lucide-react';
const JobList = ({joblist,country,nextPage,industry,s,pageNum,type}:{joblist:any[],nextPage:number,country:string,industry:string,s:string,pageNum:string,type:string}) => {
    const [isLoading,setIsLoading] = useState(0);
    const pageNumInt = +pageNum;
    const router = useRouter();
    const {isSignedIn,userId} = useAuth();
    function handleStart(){
      setIsLoading(0);
    }
    async function handleClick(jobId:any){
        console.log("jobId is",jobId);
        if(isSignedIn){
            try {
                setIsLoading(1);
                const res = await saveJob(userId,jobId);
                if(res.status==200){
                  console.log("saved");
                  setIsLoading(2);
                }
                else{
                  console.log("error");
                  setIsLoading(3);
                }
            } catch (error) {
                console.log(error);
                setIsLoading(3);
            }
        }
        else{
            router.push("/sign-up");
        }
    }
    
    return(
        <>
        {joblist.length==0? 
          <div className="text-primary w-full flex justify-center mt-16 text-3xl font-semibold">No results found</div> :
          <ul className=" mb-1 ml-5">
            {joblist.map((job:any)=>(
              <div key = {job.url}>
                <div key={job.url} className="w-full min-h-[150px] group hover:cursor-pointer mb-5 bg-zinc-100 border-2 rounded-md border-zinc-200 ">
                  <div className="flex mt-5 pb-5 px-4 justify-between items-start">
                    <div className="flex flex-col">
                      <div className="flex items-start group gap-x-4">
                        <h1 className="font-bold text-lg max-w-[500px]" >{job.title}</h1>
                        <Dialog>
                          <DialogTrigger>
                          <button className="z-10" onClick={handleStart}><Image src="/purpleheart.svg" width={30} height={30} alt="heart" className="invisible group-hover:visible z-10 hover:scale-105"/></button>
                          </DialogTrigger>
                          <DialogContent>
                            {(isLoading == 2) ? 
                            (
                              <div className="w-full p-5 h-full flex flex-col text-xl font-semibold items-center justify-center gap-x-8">
                                <div>Job Successfully Saved</div>
                                <div><Check className="text-green-500 font-semibold text-3xl"/></div>
                              </div>
                            )
                            : (isLoading==3) 
                            ? (
                              <div className="w-full p-5 h-full flex flex-col text-xl font-semibold items-center justify-center gap-x-8">
                                <div>Something Went Wrong!</div>
                                <div><CircleX className="text-pink-500 font-semibold text-3xl"/></div>
                              </div>
                            )
                            : (
                              <div>
                                <DialogHeader>
                                  <DialogTitle>Save this Job?</DialogTitle>
                                  <DialogDescription>
                                    You can check your saved jobs in your dashboard. 
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="flex justify-end w-full gap-x-5 mt-3 items-center">
                                  <Button className="z-10 bg-black w-[100px]"  onClick={()=>{handleClick(job._id)}}>
                                    {(isLoading==0)? "Save" : <LoaderCircle className="animate-spin"/>}
                                  </Button>
                                  <DialogClose asChild>
                                    <Button type="button" className="w-[100px]" variant="secondary">
                                      Close
                                    </Button>
                                  </DialogClose>
                                </div>
                            </div>
                            )
                            }
                          </DialogContent>
                        </Dialog>
                      </div>
                      <div className="flex items-center mt-5 gap-x-5"><div className={`text-primary rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max`}>{formatDate(job.date)}</div><div className={`text-pink-600 rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max ${job.salary==""? "hidden":""}`}>{job.salary}</div></div>
                      <div className="flex items-center mt-5 gap-x-5"><div className="text-indigo-600 rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max">{`${job.category.charAt(0).toUpperCase()+job.category.slice(1)}`}</div><div className={cn(job.contracttype=="p"?"text-violet-600":"text-amber-600"," rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max")}>{
                        job.contracttype=="p"?
                          "Permanent":
                          "Contract"
                    }</div></div>
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
                      <Link href = {job.url} className="text-indigo-600 p-1 rounded-full bg-white w-max px-4 animate border-2 border-white hover:border-indigo-600 hover:bg-indigo-600 hover:text-white duration-500 font-semibold flex gap-x-1 mt-8">
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
              <PaginationPrevious href={`?${checkNullandCall({country:country,page:`${pageNumInt-1}`,industry:industry,s:s,type:type})}`} className={pageNum == "1"? "hidden": "text-center min-w-[100px] bg-indigo-400 rounded-lg p-2 hover:bg-indigo-500 hover:text-white"}/>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href={`?${checkNullandCall({country:country,page:`${pageNumInt+1}`,industry:industry,s:s,type:type})}`} className={nextPage == 0? "hidden": "text-center min-w-[100px] bg-indigo-400 rounded-lg p-2 hover:bg-indigo-500 hover:text-white"} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        </>
    )
}
export default JobList;