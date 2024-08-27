"use server"
import { auth } from "@clerk/nextjs/server";
import { connectToDB } from "@/lib/db";
import User from "@/lib/models/user.model";
export async function POST(req:Request,{ params }: { params: { jobId: string } }){
    const id = params.jobId;
    const {userId} = auth();
    if(!userId){
      console.log("user not signed in");
      return new Response('User not signed in', {
        status: 400,
      })
    }
    else{
      console.log("user signed in");
      await connectToDB();
      const user = await User.findOne({clerkId:userId});
      console.log(user.firstName);
      user.savedJobs.push(id);
      console.log(id.toString());
      await user.save().then(console.log(`job saved to ${user.firstName}`)).catch((error:Error)=>{console.log(error)});
      return new Response('', { status: 200 })
    }
  }
