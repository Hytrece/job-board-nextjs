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
  const countryName = "Czeckia"
  return (
    <div className="overflow-hidden">
        <Header name={countryName} bgImage={`/czeckia/bg.jpg`}/>
        <TracingBeam className="px-1">
          <Information country = {"czeckia"}/>
          <JobSection country = {"czeckia"}/> 
          <StepSection country = {"czeckia"}/>
          <CheckList country = {"czeckia"}/>
          <BenefitSection country = {"czeckia"}/>
          <QASection country = {"czeckia"}/>
          <Subscribe country={countryName}/>
        </TracingBeam>
    </div>
  );
};
export default CountryPage;
