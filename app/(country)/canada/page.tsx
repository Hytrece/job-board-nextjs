import Header from "@/components/header";
import Information from "@/components/information";
import { TracingBeam } from "@/components/ui/tracing-beam";
import CheckList from "@/components/checklist";
import Subscribe from "@/components/subscribe";
import JobSection from "@/components/jobsection";
import StepSection from "@/components/stepbystepsection";
import BenefitSection from "@/components/benefitsection";
import QASection from "@/components/qasection";

const Canada = () => {
  return (
    <div className="overflow-hidden">
        <Header name="Canada" bgImage="/canadabg.jpg"/>
        <TracingBeam className="px-1">
          <Information/>
          <JobSection/> 
          <StepSection/>
          <BenefitSection/>
          <CheckList features={features}/>
          <QASection/>
          <Subscribe country="Canada"/>
        </TracingBeam>
    </div>
  );
};
const features = [
  {
      title: "Fast Refresh",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
  },
  {
      title: "Analytics",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
  },
  {
      title: "Datacenter security",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
  },
  {
      title: "Build on your terms",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
  }
]
export default Canada;
