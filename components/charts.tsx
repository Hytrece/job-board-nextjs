import Stats from "@/components/stats";
import DonutChart from "./donutchart";

const Charts = () => {
    return(
    <section className="w-full mt-28 py-7 mx-10">
        <h4 className="text-primary font-semibold text-lg">Charts</h4>
        <h1 className="text-2xl font-bold mt-5 sm:text-2xl">
            Salaries & Cost of living 
        </h1>
        <p className="mt-5 leading-loose">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy.
        </p>
        <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-x-10 items-center">
        <Stats/>
        <DonutChart/>
        </div>
    </section>)
};
export default Charts;