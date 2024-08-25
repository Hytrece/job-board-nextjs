"use server"
import { auth } from "@clerk/nextjs/server";
import { connectToDB } from "@/lib/db";
import User from "@/lib/models/user.model";
async function handleLike(jobId:any){
    const userId = auth();
    if(!userId){
      auth().redirectToSignIn();
    }
    await connectToDB();
    const user = await User.findOne({clerkId:userId});
    user.savedJobs.push(jobId);
  }

export default handleLike;