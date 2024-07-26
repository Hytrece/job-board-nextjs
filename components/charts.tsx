import Stats from "@/components/stats";

const Charts = () => {
    return(
    <section className="w-full min-h-screen mt-28 py-7 mx-10">
        <h4 className="text-primary font-semibold text-lg">Charts</h4>
        <h1 className="text-2xl font-bold mt-5 sm:text-2xl">
            Salaries & Cost of living 
        </h1>
        <p className="mt-5 leading-loose">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy.
        </p>
        <Stats/>
    </section>)
};
export default Charts;