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
  const countryName = "Japan"
  return (
    <div className="overflow-hidden">
        <Header name={countryName} bgImage={`/japan/bg.jpg`}/>
        <TracingBeam className="px-1">
          <Information country = {"japan"}/>
          <JobSection country = {"japan"}/> 
          <StepSection country = {"japan"}/>
          <BenefitSection country = {"japan"}/>
          <CheckList country = {"japan"}/>
          <QASection country = {"japan"}/>
          <Subscribe country={countryName}/>
        </TracingBeam>
    </div>
  );
};
export default CountryPage;
