import mongoose from "mongoose";
import Country from "@/utils/country-schema";
async function connectToDB(){
        try {
        const connection = await mongoose.connect(
          "mongodb+srv://hdh4063:h1234512345@cluster0.q1izzip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        );
        console.log("mongoDB connected");
      } catch (error) {
        console.log(error);
      }
}
const JobPage = async () => {
    const mongo = connectToDB();
    const joblist = await Country.find({country:"canada",category:"barista"})
    return(
      <section className="h-screen w-full">
        <div className="m-10 items-start">
          <ul className="m-5">
            {joblist.map((job)=>(
              <>
              <h1 className="font-bold text-xl" key={job._id}>{job.response.title}</h1>
              <h2 className="font-medium text-muted-foreground">{job.response.company}</h2>
              </>
            ))}
          </ul>
        </div>
      </section>
    )
}
export default JobPage;