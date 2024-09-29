import Header from "@/components/header";
import Information from "@/components/information";
import { TracingBeam } from "@/components/ui/tracing-beam";
import CheckList from "@/components/checklist";
import Subscribe from "@/components/subscribe";
import JobSection from "@/components/jobsection";
import StepSection from "@/components/stepbystepsection";
import BenefitSection from "@/components/benefitsection";
import QASection from "@/components/qasection";

const CountryPage = ({params}:{params:{country:string}}) => {
  const countryName = params.country.charAt(0).toUpperCase() + params.country.slice(1);
  return (
    <div className="overflow-hidden">
        <Header name={countryName} bgImage={`/${params.country}/bg.jpg`}/>
        <TracingBeam className="px-1">
          <Information country = {params.country}/>
          <JobSection country = {params.country}/> 
          <StepSection country = {params.country}/>
          <BenefitSection country = {params.country}/>
          <CheckList country = {params.country}/>
          <QASection country = {params.country}/>
          <Subscribe country={countryName}/>
        </TracingBeam>
    </div>
  );
};
export default CountryPage;
