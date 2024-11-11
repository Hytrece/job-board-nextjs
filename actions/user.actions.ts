"use server"
import User from "@/lib/models/user.model"
import {connectToDB} from "@/lib/db"
import { revalidatePath } from "next/cache";

export async function createUser(user: any) {
    console.log("server actions started");
    try {
        console.log("Connecting to DB...");
        await connectToDB();
        console.log("Connected to DB.");

        // Log the incoming user object to check its structure
        console.log("Incoming user data:", user);

        // Attempt to create the user
        let newUser;
        try {
            // Creating user
            newUser = await User.create(user);
            console.log("User saved successfully:", newUser);
        } catch (createError) {
            // Catch and log any errors that happen during user creation
            console.log("Error creating user:", createError);
            return null; // Optionally return null if creation fails
        }

        // If the creation was successful but the user object is still empty or invalid
        if (!newUser || !newUser._id) {
            console.log("User created, but something went wrong:", newUser);
        } else {
            console.log("User successfully created:", newUser);
        }

        return newUser;

    } catch (error) {
        // This will catch any unexpected errors outside of user creation
        console.log("Unexpected error in createUser function:", error);
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