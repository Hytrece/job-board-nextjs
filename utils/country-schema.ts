import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  country: { type: String, required: true },
  category:{type: String, required: true },
  response:{type: Object, required:true}
});
const Country = mongoose.models.Country || mongoose.model("Country", jobSchema);
export default Country;
