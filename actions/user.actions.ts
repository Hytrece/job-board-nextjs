"use server";
import User from "@/lib/models/user.model"
import {connectToDB} from "@/lib/db"

export async function createUser(user:any){
    try {
        await connectToDB();
        const newUser = await User.create(user);
        return 
    } catch (error) {
        console.log(error);
    }
}