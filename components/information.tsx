import { MoveRight } from "lucide-react";
import {information, stats} from "@/constants/information"
const Information = ({country}:{country:string}) => {
  const countryName = country.charAt(0).toUpperCase() + country.slice(1);
  const findInformation = information.find((e)=>e.country == country);
  const paragraph = findInformation?.info;
  const findStats = stats.find((e)=>e.country == country);
  const showStats = findStats?.stat;
  return (
    <section className="relative overflow-y-visible">
      <div className="flex flex-col gap-y-3 mt-10 ml-10">
        <h4 className="text-primary font-semibold text-lg">Overview</h4>
        <h2 className="text-2xl mt-2 font-bold">Working Holiday in {countryName}</h2>
        <div className="mt-10 pt-2 flex flex-col sm:flex-row sm:flex-wrap gap-y-10 justify-center items-center gap-x-3 lg:divide-x">
        {showStats?.map((stat)=>(
          <ul key={stat.title} className="text-center flex flex-col gap-y-2 px-12 md:px-16">
            <h3 className="text-primary text-2xl font-semibold">{stat.data}</h3>
            <p className="text-nowrap text-semibold font-medium">{stat.title}</p>
          </ul>
        ))}
        </div>
        <p className="mt-10 flex flex-col z-10 font-md leading-loose">
          {paragraph}
        </p>
        <div className="text-primary mt-3 group flex hover:cursor-pointer items-center gap-x-4 transition duration-100 font-bold text-lg outline-2 outline-primary rounded-xl">Checklist to Canada <MoveRight className="font-bold transition transform group-hover:translate-x-1 duration-150"/></div>
      </div>
    </section>
  );
};

export default Information;
