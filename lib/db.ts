import mongoose,{Mongoose} from "mongoose";
export async function connectToDB(){
    try {
    const connection = await mongoose.connect(
      "mongodb+srv://hdh4063:h1234512345@cluster0.q1izzip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    );
    console.log("mongoDB connected");
  } catch (error) {
    console.log(error);
  }
}