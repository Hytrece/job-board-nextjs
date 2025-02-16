import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  country: String,
  category: String,
  title: {
    en: String,
    kr: String,
  },
  location: {
    en: String,
    kr: String,
  },
  date: String,
  salary: String,
  url: String,
  company: String,
  description: String,
  contracttype: String,
});
const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);
export default Job;