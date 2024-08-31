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
const JobList = ({joblist,nextPage,industry,s,pageNum}:{joblist:any[],nextPage:number,industry:string,s:string,pageNum:string}) => {
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
                      <div className="flex items-center group gap-x-4 ">
                        <h1 className="font-bold text-lg max-w-[500px]" >{job.title}</h1>
                        <button onClick={()=>{handleClick(job._id)}} className="z-10"><Image src="/purpleheart.svg" width={30} height={30} alt="heart" className="hidden group-hover:block z-10 hover:scale-105"/></button>
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
        </>
    )
}
export default JobList;