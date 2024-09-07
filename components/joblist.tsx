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
const JobList = ({joblist,nextPage,industry,s,pageNum,type}:{joblist:any[],nextPage:number,industry:string,s:string,pageNum:string,type:string}) => {
    const pageNumInt = +pageNum;
    const router = useRouter();
    const {isSignedIn,userId} = useAuth();
    async function handleClick(jobId:any){
        console.log("jobId is",jobId);
        if(isSignedIn){
            try {
                const res = await saveJob(userId,jobId);
                if(res.status==200){
                  console.log("saved");
                }
                else{
                  console.log("error");
                }
            } catch (error) {
                console.log(error);
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
          <ul className=" ml-5">
            {joblist.map((job:any)=>(
              <div key = {job.url}>
                <div key={job.url} className="w-full min-h-[150px] group hover:cursor-pointer mb-5 bg-zinc-100 border-2 rounded-md border-zinc-200 ">
                  <div className="flex pt-5 pb-5 px-4 justify-between">
                    <div className="flex flex-col gap-y-4">
                      <div className="flex items-center group gap-x-4 min-h-[30px]">
                        <h1 className="font-bold text-lg max-w-[500px]" >{job.title}</h1>
                        <button onClick={()=>{handleClick(job._id)}} className="z-10"><Image src="/purpleheart.svg" width={30} height={30} alt="heart" className="hidden group-hover:block z-10 hover:scale-105"/></button>
                      </div>
                      <div className="flex items-center gap-x-5"><div className={`text-primary rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max`}>{formatDate(job.date)}</div><div className={`text-pink-600 rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max ${job.salary==""? "hidden":""}`}>{job.salary}</div></div>
                      <div className="flex items-center gap-x-5"><div className="text-indigo-600 rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max">{`${job.category.charAt(0).toUpperCase()+job.category.slice(1)}`}</div><div className={cn(job.contracttype=="p"?"text-violet-600":"text-amber-600"," rounded-full bg-white p-1 px-2 text-sm min-w-0 w-max")}>{
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
              <PaginationPrevious href={`?${checkNullandCall({page:`${pageNumInt-1}`,industry:industry,s:s,type:type})}`} className={pageNum == "1"? "hidden": "text-center min-w-[100px] bg-indigo-400 rounded-lg p-2 hover:bg-indigo-500 hover:text-white"}/>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href={`?${checkNullandCall({page:`${pageNumInt+1}`,industry:industry,s:s,type:type})}`} className={nextPage == 0? "hidden": "text-center min-w-[100px] bg-indigo-400 rounded-lg p-2 hover:bg-indigo-500 hover:text-white"} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        </>
    )
}
export default JobList;