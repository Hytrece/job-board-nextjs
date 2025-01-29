import WorkingHolidayGuide from "@/components/stepsalternative";
import { stepsData } from "@/constants/step-by-step";
interface Step{
  title:string,
  description:string,
  image?:string
}
const StepSection = ({country}:{country:string}) => {
    const countryName = country.charAt(0).toUpperCase() + country.slice(1);
    const getCountry = stepsData.find((e)=>e.country == country)
    const stepData: Step[] = getCountry?.stepList || [];
    return (
        <section className="w-full mt-28 px-4 py-7 md:px-8">
         <div className="max-w-xl">
            <h4 className="text-primary font-semibold text-lg">How to apply</h4>
            <div className="flex gap-x-7 items-center">
              <h1 className="text-2xl font-bold mt-5 sm:text-2xl">
                Step-by-Step Guide
              </h1>
            </div>
            <p className="mt-5 leading-loose">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy. {countryName}
            </p>
          </div>
          <div className="mt-12 w-full">
            <WorkingHolidayGuide steps = {stepData}/>
          </div>
      </section>
    )
}
export default StepSection; 