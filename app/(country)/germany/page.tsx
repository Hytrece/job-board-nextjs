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
  const countryName = "Germany"
  return (
    <div className="overflow-hidden">
        <Header name={countryName} bgImage={`/germany/bg.jpg`}/>
        <TracingBeam className="px-1">
          <Information country = {"germany"}/>
          <JobSection country = {"germany"}/> 
          <StepSection country = {"germany"}/>
          <BenefitSection country = {"germany"}/>
          <CheckList country = {"germany"}/>
          <QASection country = {"germany"}/>
          <Subscribe country={countryName}/>
        </TracingBeam>
    </div>
  );
};
export default CountryPage;
