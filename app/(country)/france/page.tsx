import Header from "@/components/header";
import Information from "@/components/information";
import { TracingBeam } from "@/components/ui/tracing-beam";
import CheckList from "@/components/checklist";
import Subscribe from "@/components/subscribe";
import JobSection from "@/components/jobsection";
import StepSection from "@/components/stepbystepsection";
import BenefitSection from "@/components/benefitsection";
import QASection from "@/components/qasection";

const CountryPage = () => {
  const countryName = "France"
  return (
    <div className="overflow-hidden">
        <Header name={countryName} bgImage={`/france/bg.jpg`}/>
        <TracingBeam className="px-1">
          <Information country = {"france"}/>
          <JobSection country = {"france"}/> 
          <StepSection country = {"france"}/>
          <BenefitSection country = {"france"}/>
          <CheckList country = {"france"}/>
          <QASection country = {"france"}/>
          <Subscribe country={countryName}/>
        </TracingBeam>
    </div>
  );
};
export default CountryPage;
