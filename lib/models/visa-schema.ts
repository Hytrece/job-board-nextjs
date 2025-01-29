import mongoose from "mongoose";

const visaSchema = new mongoose.Schema({
   country: { type: String, required: true },
   name: { type: String, required: true }, 
   visa_type: { type: String, required: true },
   duration: { type: String, default: "" },
   processing_time: { type: String, default: "" },
   application_process: { type: String, default: "" },
   official_link: { type: String, default: "" },
   family_allowed: { type: String, default: "" },
   financial_proof_required: { type: String, default: "" },
   permanent_residency_pathway: { type: String, default: "" }
}); 

const Visa = mongoose.models.Visa || mongoose.model("Visa", visaSchema);

export default Visa;