import WorkingHolidayQA from "@/components/qanda";
import { questions } from "@/constants/questions";
const QASection = ({country}:{country:string}) => {
    const getCountry = questions.find((e)=>e.country == country);
    const questionList = getCountry?.qlist || [];
    return (
        <section className="w-full mt-28 mx-auto px-4 py-7 md:px-8">
        <div className="max-w-xl">
          <h4 className="text-primary font-semibold text-lg">Q&A</h4>
          <div className="flex gap-x-7 items-center">
            <h1 className="text-2xl font-bold mt-5 sm:text-2xl">
              Frequently asked Questions
            </h1>
          </div>
        </div>
        <div className="mt-12 w-full ">
          <WorkingHolidayQA questionList = {questionList}/>
        </div>
      </section>
    )
}
export default QASection;