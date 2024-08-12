"use client"
import {useRouter} from "next/navigation"
const MoreJobs = () =>{
    const router = useRouter();
    return(<button className="p-[2px] mt-5 relative" onClick={(()=>{ router.push("/canada/jobs");})}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        <div className="px-8 py-1  bg-black rounded-full relative group transition duration-200 text-white text-sm hover:bg-transparent">
          More Jobs
        </div>
      </button>)
}
export default MoreJobs;