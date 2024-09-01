"use server"

import { connectToDB } from "@/lib/db"
import User from "@/lib/models/user.model";
import mongoose from "mongoose";
import Country from "@/utils/country-schema";
import { NextResponse } from "next/server";


export async function saveJob(userId:string,jobId:mongoose.Schema.Types.ObjectId){
    connectToDB();
    try {
        const response = await User.findOneAndUpdate({clerkId:userId},{$addToSet:{savedJobs:jobId}});
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
    industry:string,
    s:string,
    pageNumInt:number,
    type:string
}
export async function fetchJob({industry,s,pageNumInt,type}:Params){
    connectToDB();
    let joblist;
    let nextPage;
    const regex = RegExp(s,'i');
    if(type==""){
        joblist = industry == "none" ? await Country.find({country:"australia", title: {$regex: regex}}).lean().skip((pageNumInt-1)*20).limit(20) : await Country.find({country:"australia",category:industry,title: {$regex: regex}}).lean().skip((pageNumInt-1)*20).limit(20);
        nextPage = industry == "none" ? await Country.find({country:"australia",title: {$regex: regex}}).lean().skip((pageNumInt)*20).countDocuments() : await Country.find({country:"australia",category:industry,title: {$regex: regex}}).lean().skip((pageNumInt)*20).countDocuments();
    }
    else{
        console.log(`job type=${type}`);
        joblist = industry == "none" ? await Country.find({country:"australia", title: {$regex: regex},contracttype:type}).lean().skip((pageNumInt-1)*20).limit(20) : await Country.find({country:"australia",category:industry,title: {$regex: regex},contracttype:type}).lean().skip((pageNumInt-1)*20).limit(20);
        nextPage = industry == "none" ? await Country.find({country:"australia",title: {$regex: regex},contracttype:type}).lean().skip((pageNumInt)*20).countDocuments() : await Country.find({country:"australia",category:industry,title: {$regex: regex},contracttype:type}).lean().skip((pageNumInt)*20).countDocuments();
    }
    
    return {joblist:joblist, nextPage:nextPage};
}