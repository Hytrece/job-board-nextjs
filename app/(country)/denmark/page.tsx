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
  const countryName = "Denmark"
  return (
    <div className="overflow-hidden">
        <Header name={countryName} bgImage={`/denmark/bg.jpg`}/>
        <TracingBeam className="px-1">
          <Information country = {"denmark"}/>
          <JobSection country = {"denmark"}/> 
          <StepSection country = {"denmark"}/>
          <CheckList country = {"denmark"}/>
          <BenefitSection country = {"denmark"}/>
          <QASection country = {"denmark"}/>
          <Subscribe country={countryName}/>
        </TracingBeam>
    </div>
  );
};
export default CountryPage;
