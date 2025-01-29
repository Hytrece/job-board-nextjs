import { importVisas } from '@/actions/visas.actions';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import VisaClientWrapper from '@/components/visa-client-wrapper';
import { visalist } from '@/constants/visas';
interface Visa {
  country: string;
  visa_type: string;
  duration: string;
  processing_time: string;
  application_process: string;
  official_link: string;
  family_allowed: string;
  financial_proof_required: string;
  permanent_residency_pathway: string;
}

async function WorkVisaTable() {
  const visas:Visa[] = visalist;

  return (
    <div className="min-h-screen w-full bg-zinc-700 flex justify-center">
    <div className="min-h-screen w-[75%] bg-white p-4 px-12">
      <div className="w-full mx-auto mb-8">
        <div className="flex justify-between items-center pt-5 mb-8">
          <h1 className="text-2xl font-bold">Global Work Visa Database</h1>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600">WORK VISAS</a>
            <a href="#" className="text-red-500">REQUIREMENTS</a>
            <a href="#" className="text-gray-600">COMPARE</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {visas.map((visa, index) => (
                <SelectItem key={index} value={visa.country.toLowerCase()}>
                  {visa.country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Visa type" />
            </SelectTrigger>
            <SelectContent>
              {Array.from(new Set(visas.map(visa => visa.visa_type))).map((type, index) => (
                <SelectItem key={index} value={type.toLowerCase()}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Processing time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fast">Fast (≤ 1 month)</SelectItem>
              <SelectItem value="medium">Medium (1-3 months)</SelectItem>
              <SelectItem value="slow">Slow (3+ months)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <VisaClientWrapper visas={visas} />
      </div>
    </div>
    </div>
  );
}

export default WorkVisaTable;