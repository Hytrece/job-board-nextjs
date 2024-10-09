"use server"
import { connectToDB } from "@/lib/db"
import User from "@/lib/models/user.model";
import mongoose, { ObjectId } from "mongoose";
import Country from "@/lib/models/country-schema";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
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
export async function fetchJob({country, industry,s,pageNumInt,type}:Params){
    connectToDB();
    let joblist;
    let nextPage;
    const regex = RegExp(s,'i');
    if(type==""){
        joblist = industry == "none" ? await Country.find({country:country, title: {$regex: regex}}).lean().skip((pageNumInt-1)*20).limit(20) : await Country.find({country:country,category:industry,title: {$regex: regex}}).lean().skip((pageNumInt-1)*20).limit(20);
        nextPage = industry == "none" ? await Country.find({country:country,title: {$regex: regex}}).lean().skip((pageNumInt)*20).countDocuments() : await Country.find({country:country,category:industry,title: {$regex: regex}}).lean().skip((pageNumInt)*20).countDocuments();
    }
    else{
        console.log(`job type=${type}`);
        joblist = industry == "none" ? await Country.find({country:country, title: {$regex: regex},contracttype:type}).lean().skip((pageNumInt-1)*20).limit(20) : await Country.find({country:country,category:industry,title: {$regex: regex},contracttype:type}).lean().skip((pageNumInt-1)*20).limit(20);
        nextPage = industry == "none" ? await Country.find({country:country,title: {$regex: regex},contracttype:type}).lean().skip((pageNumInt)*20).countDocuments() : await Country.find({country:country,category:industry,title: {$regex: regex},contracttype:type}).lean().skip((pageNumInt)*20).countDocuments();
    }
    
    return {joblist:joblist, nextPage:nextPage};
}
export async function deleteJob(jobId:string){
    const {userId} = auth();
    var Id = new mongoose.Types.ObjectId(jobId);
    if(!userId){
        return NextResponse.json({success:false,message:"not authenticated"},{status:401});
    }
    try {
        await connectToDB();
        const response = await User.findOneAndUpdate({clerkId:userId},{$pull:{savedJobs:{job:{$in:[Id]}}}});
        if(response){
            console.log("job deleted successfully")
            revalidatePath("../dashboard/jobs")
            return NextResponse.json({success:true,message:"job deleted successfully"},{status:200});
        }
        else {
            return NextResponse.json(
                { success: false, message: "Job not found" },
                { status: 404 }
            );
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false,message:"Unexpected error occured"},{status:500});
    }


}