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
  const countryName = "Australia"
  return (
    <div className="overflow-hidden">
        <Header name={countryName} bgImage={`/australia/bg.jpg`}/>
        <TracingBeam className="px-1">
          <Information country = {"australia"}/>
          <JobSection country = {"australia"}/> 
          <StepSection country = {"australia"}/>
          <BenefitSection country = {"australia"}/>
          <CheckList country = {"australia"}/>
          <QASection country = {"australia"}/>
          <Subscribe country={countryName}/>
        </TracingBeam>
    </div>
  );
};
export default CountryPage;
