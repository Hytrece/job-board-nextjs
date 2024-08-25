"use client"
import handleLike from "@/actions/save.actions";
import Image from "next/image";
const LikeButton = (jobId:any)=> {
    return(
        <button onClick={()=>{handleLike(jobId)}} className="z-10"><Image src="/purpleheart.svg" width={30} height={30} alt="heart" className="hidden group-hover:block z-10 hover:scale-105"/></button>
    )
}
export default LikeButton