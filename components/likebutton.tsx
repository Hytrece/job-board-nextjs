"use client"
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
const LikeButton = (jobId:any)=> {
    const router = useRouter();
    const {isSignedIn} = useAuth();
    async function saveJob({jobId}:{jobId:any}){
        if(isSignedIn){
            try {
                const get = await fetch(`/api/mongodb/${jobId}`,{method:"POST"})
                console.log(`Id i ${jobId}`);
                console.log(get);
            } catch (error) {
                console.log(error);
            }
        }
        else{
            router.push("/sign-up");
        }
    }
    return(
        <button onClick={()=>{saveJob({jobId})}} className="z-10"><Image src="/purpleheart.svg" width={30} height={30} alt="heart" className="hidden group-hover:block z-10 hover:scale-105"/></button>
    )
}

export default LikeButton