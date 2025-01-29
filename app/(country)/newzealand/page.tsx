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
  const countryName = "New Zealand"
  return (
    <div className="overflow-hidden">
        <Header name={countryName} bgImage={`/newzealand/bg.jpg`}/>
        <TracingBeam className="px-1">
          <Information country = {"newzealand"}/>
          <JobSection country = {"newzealand"}/> 
          <StepSection country = {"newzealand"}/>
          <CheckList country = {"newzealand"}/>
          <BenefitSection country = {"newzealand"}/>
          <QASection country = {"newzealand"}/>
          <Subscribe country={countryName}/>
        </TracingBeam>
    </div>
  );
};
export default CountryPage;
