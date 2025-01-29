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
  const countryName = "Austria"
  return (
    <div className="overflow-hidden">
        <Header name={countryName} bgImage={`/austria/bg.jpg`}/>
        <TracingBeam className="px-1">
          <Information country = {"austria"}/>
          <JobSection country = {"austria"}/> 
          <StepSection country = {"austria"}/>
          <CheckList country = {"austria"}/>
          <BenefitSection country = {"austria"}/>
          <QASection country = {"austria"}/>
          <Subscribe country={countryName}/>
        </TracingBeam>
    </div>
  );
};
export default CountryPage;
