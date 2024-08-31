"use client"
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { saveJob } from "@/actions/jobs.actions";
const LikeButton = (jobId:any)=> {
    const router = useRouter();
    const {isSignedIn,userId} = useAuth();
    async function handleClick({jobId}:{jobId:any}){
        console.log("jobId is",jobId);
        if(isSignedIn){
            try {
                await saveJob(userId,jobId);
            } catch (error) {
                console.log(error);
            }
        }
        else{
            router.push("/sign-up");
        }
    }
    return(
        <button onClick={()=>{handleClick({jobId})}} className="z-10"><Image src="/purpleheart.svg" width={30} height={30} alt="heart" className="hidden group-hover:block z-10 hover:scale-105"/></button>
    )
}

export default LikeButton