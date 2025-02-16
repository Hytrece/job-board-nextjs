"use server"
import { connectToDB } from "@/lib/db"
import User from "@/lib/models/user.model";
import mongoose, { ObjectId } from "mongoose";
import Job from "@/lib/models/job-schema";
import { revalidatePath } from 'next/cache'
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { JobType, MidType, MidTypePopulate } from "@/lib/types/jobtype";
export async function saveJob(userId:string,jobId:string){
    var Id = new mongoose.Types.ObjectId(jobId);
    connectToDB();
    try {
        const response = await User.findOneAndUpdate({clerkId:userId},{$push:{savedJobs:{job:Id,status:0}}});
        if(response){
            console.log("job saved successfully");
            return {status:200};
        }
        else{
            console.log("error while saving");
            return {status:500}
        }
    } catch (error) {
        return {status:500}
    }
;
}
interface Params{
    country:string
    industry:string,
    s:string,
    pageNumInt:number,
    type:string
}


export async function fetchJob({
  country,
  industry,
  s,
  pageNumInt,
  type
}: Params) {
  await connectToDB();
  
  console.log('Fetching jobs with params:', {
    country,
    industry,
    s,
    pageNumInt,
    type
  });

  const regex = new RegExp(s, 'i');
  const pageSize = 10;
  const skip = (pageNumInt - 1) * pageSize;

  try {
    // Base query object
    const baseQuery = {
      country,
      'title.en': { $regex: regex },
      ...(type && { contracttype: type }),
      ...(industry !== 'none' && { category: industry })
    };

    console.log('MongoDB query:', JSON.stringify(baseQuery, null, 2));

    const [joblist, nextPage] = await Promise.all([
      Job.find(baseQuery)
        .skip(skip)
        .limit(pageSize)
        .lean()
        .exec(),
      Job.find(baseQuery)
        .skip(pageNumInt * pageSize)
        .countDocuments()
    ]);

    console.log(`Found ${joblist.length} jobs, nextPage count: ${nextPage}`);

    // Force revalidation of the jobs page
    revalidatePath('/jobs');

    return { joblist, nextPage };
  } catch (error) {
    console.error('Error in fetchJob:', error);
    throw error; // Let the page component handle the error
  }
}
export async function deleteJob(jobId:string){
    const {userId} = auth();
    var Id = new mongoose.Types.ObjectId(jobId);
    if(!userId){
        return {success:false,message:"not authenticated"};
    }
    try {
        await connectToDB();
        const response = await User.findOneAndUpdate({clerkId:userId},{$pull:{savedJobs:{job:{$in:[Id]}}}});
        if(response){
            console.log("job deleted successfully")
            revalidatePath("../dashboard/jobs");
            return {success:true,message:"success"};
        }
        else {
            return { success: false, message: "Job not found" };
        }
    } catch (error) {
        console.log(error);
        return {success:false,message:"Unexpected error occured"};
    }
}
export async function changeStatus(jobId:string,stat:number){
    const {userId} = auth().protect()
    var Id = new mongoose.Types.ObjectId(jobId);
    if(!userId){
        return {success:false,message:"not authenticated"};
    }
    try{
        await connectToDB()
        const user = await User.findOne({clerkId:userId})
        if(!user){
            console.log("user not found")
            return {success:false,message:"user not found"};
        }
        const jobList: MidType[] = user?.savedJobs;
        jobList.forEach((elem)=>{
            if(elem.job.toString() == jobId){
                if(stat>(elem.status as number)){
                    console.log("hi")
                    elem.status = new Number(stat);
                }
                else if(stat == (elem.status as number)){
                    if(elem.status as number >= 1){
                        elem.status = new Number(elem.status as number - 1)
                    }
                }
                console.log("stat", stat)
                console.log("current", elem.status as number)
            }
        })
        const response = await user.save();
        if(response){
            console.log("status changed successfully")
            revalidatePath("../dashboard/jobs")
            return {success:true,message:"status changed successfully"};
        }
        else {
            return { success: false, message: "Error" };
        }
    }
    catch(error){
        return{ success: false, message:"error" };
    }
}