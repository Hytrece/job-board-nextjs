import MoreJobs from "@/components/morejobs";
import Link from "next/link";
import Image from "next/image"
import { workingHolidayJobs } from "@/constants/jobs";
const JobSection = ({country}:{country:string}) => {
    const countryName = country.charAt(0).toUpperCase() + country.slice(1);
    const Job = workingHolidayJobs.find((e)=>e.country == country);
    const JobList = Job?.jobList;
    return (
        <section className="w-full mt-28 mx-auto px-4 py-7 md:px-8">
        <div className="max-w-xl">
          <h4 className="text-primary font-semibold text-lg">Search</h4>
          <div className="flex gap-x-7 items-center">
            <h1 className="text-2xl font-bold mt-5 sm:text-2xl">
              Jobs in {countryName}
            </h1>
            <MoreJobs/>
          </div>
            <p className="mt-5 leading-loose">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy.
            </p>
        </div>
          <div className="mt-12">
              <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {
                      JobList?.map((item, idx) => (
                          <li key={idx} className="gap-8 flex hover:cursor-pointer flex-col">
                            <Link href={{pathname:"/canada/jobs", query:{category:(item.name).toLowerCase()}}} className="group">
                              <div className="w-full h-60 overflow-hidden rounded-xl relative">
                                <div className="w-full h-60 relative transition transform rounded-xl duration-700 group-hover:scale-105 group-hover:cursor-pointer">
                                  <Image
                                      src={item.src}
                                      className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                      alt="jobpic"
                                      fill = {true}
                                      
                                  />
                                  </div>
                              </div>
                              <div className="mt-4 sm:mt-0 hover:cursor-pointer">
                                  <h4 className="text-lg font-semibold">{item.name}</h4>
                                  <p className="text-primary">1000+ Jobs</p>
                                  <p className="mt-2">{`Average Salary: ${item.avg}`}</p>
                              </div>
                            </Link>
                          </li>
                      ))
                  }
              </ul>
          </div>
      </section>
    )
}
export default JobSection;