import { connectToDB} from "@/lib/db";
import Visa from "@/lib/models/visa-schema";

export async function importVisas() {
    await connectToDB();
    try {
        const visaData = await Visa.find({});
        console.log("Visa data found");
        return visaData;
    } catch (error) {
        console.error("Error finding visa data:", error);
        return [];
    }
}