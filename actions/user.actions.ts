"use server"
import User from "@/lib/models/user.model"
import {connectToDB} from "@/lib/db"
import { revalidatePath } from "next/cache";

export async function createUser(user: any) {
    try {
        await connectToDB();
        try {
            const newUser = await User.create(user);
            if (!newUser || !newUser._id) {
                return{status:400, error: "User.create returns nothing"};
            } else {
                return{status:200, user:newUser}
            }
        } catch (createError) {
            return {status:400, error:createError}; 
        }

    } catch (error) {
       return {status:400, error:error}
    }
}

export async function setUserName(userId:string, username:string){
    try{
        await connectToDB();
        const user = await User.findOne({clerkId:userId});
        user.username = username;
        const res = await user.save()
        if(res){
            return {status:200};
        }
        else{
            return {status:400}
        }
    }
    catch(error){
        console.log(error)
        return {status:400};
    }
}