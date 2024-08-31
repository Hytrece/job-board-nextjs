import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  country: { type: String, required: true },
  category:{type: String, required: true },
  title:{type:String,required:true},
  location:{type:String,required:true},
  date:{type:String,required:true},
  salary:{type:String},
  url:{type:String,required:true},
  company:{type:String,required:true},
  description:{type:String},
  contracttype:{type:String}

});
const Country = mongoose.models.Country || mongoose.model("Country", jobSchema);
export default Country;
