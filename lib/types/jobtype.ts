import { ObjectId } from "mongoose";

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