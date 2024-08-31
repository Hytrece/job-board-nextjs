"use server"

import { connectToDB } from "@/lib/db"
import User from "@/lib/models/user.model";
import mongoose from "mongoose";
import Country from "@/utils/country-schema";


export async function saveJob(userId:string,jobId:mongoose.Schema.Types.ObjectId){
    connectToDB();
    try {
        await User.findOneAndUpdate({clerkId:userId},{$push:{savedJobs:jobId}});
        console.log("Job Succesfully saved")
    } catch (error) {
        console.log(`error saving job for${userId}`,error);
    }
;
}
interface Params{
    industry:string,
    s:string,
    pageNumInt:number
}
export async function fetchJob({industry,s,pageNumInt}:Params){
    connectToDB();
    console.log("job fetched");
    const regex = RegExp(s,'i');
    const joblist = industry == "none" ? await Country.find({country:"australia", title: {$regex: regex}}).lean().skip((pageNumInt-1)*20).limit(20) : await Country.find({country:"australia",category:industry,title: {$regex: regex}}).lean().skip((pageNumInt-1)*20).limit(20);
    const nextPage = industry == "none" ? await Country.find({country:"australia",title: {$regex: regex}}).lean().skip((pageNumInt)*20).countDocuments() : await Country.find({country:"australia",category:industry,title: {$regex: regex}}).lean().skip((pageNumInt)*20).countDocuments();
    return {joblist:joblist, nextPage:nextPage};
}