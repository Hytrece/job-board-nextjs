import {Schema,model,models} from "mongoose";
import mongoose from "mongoose";
const UserSchema = new Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        unique:true
    },
    photo:{
        type:String,
        required:true
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    savedJobs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    }],
    savedWh:[{
        type:String
    }]
})

const User = models?.User || model("User",UserSchema)
export default User;