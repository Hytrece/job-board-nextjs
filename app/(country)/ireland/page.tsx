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
  const countryName = "Ireland"
  return (
    <div className="overflow-hidden">
        <Header name={countryName} bgImage={`/ireland/bg.jpg`}/>
        <TracingBeam className="px-1">
          <Information country = {"ireland"}/>
          <JobSection country = {"ireland"}/> 
          <StepSection country = {"ireland"}/>
          <BenefitSection country = {"ireland"}/>
          <CheckList country = {"ireland"}/>
          <QASection country = {"ireland"}/>
          <Subscribe country={countryName}/>
        </TracingBeam>
    </div>
  );
};
export default CountryPage;
