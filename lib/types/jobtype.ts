import { ObjectId } from "mongoose";
import mongoose from "mongoose"
export interface JobType{
    _id:ObjectId
    country:string,
    category:string,
    title:string,
    location:string,
    date:string,
    salary:string,
    url:string,
    company:string,
    description:string,
    contracttype:string,
};
export interface MidType{
    job:mongoose.Schema.Types.ObjectId,
    status:Number
}
export interface UserType{
    clerkId:string,
    email:string,
    username?:string,
    photo:string,
    firstName?:string,
    lastName?:string,
    savedJobs?:MidType[],
}
export interface MidTypePopulate{
    job:JobType,
    status:Number
}