"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import JobsearchBar from "@/components/jobsearchbar";
import ComboboxForm from "@/components/comboboxforjob";
import { BreadcrumbDemo } from "@/components/breadcrumbs";
import ToKorean from "@/components/tokorean";
import { BackgroundGradientDemo } from "@/components/cta";
import { CareerJetCta } from "@/components/careerjetcta";
import JobList from "@/components/joblist";
import { JobKeyword, jobIconsMap } from "@/components/jobiconsmap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Types
export interface JobFilters {
  country: string;
  industry: string;
  query: string;
  page: number;
  type: string;
}
interface FilterUpdate {
  key: keyof JobFilters;
  value: string | number;  
}

interface Category {
  name: string;
  keyword: string;
}

interface JobPageClientProps {
  initialJobs: any[];
  nextPage: number;
  initialFilters: JobFilters;
  categories: Category[];
}
interface ActiveFiltersProps {
  filters: JobFilters;
  onClear: (key: keyof JobFilters, filter:JobFilters, router:AppRouterInstance) => void;
  router:AppRouterInstance
}
const WORK_TYPES = [
  { name: "All", type: "" },
  { name: "Permanent", type: "p" },
  { name: "Contract", type: "c" }
] as const;

// Filter Tag Components
interface FilterTagProps {
  label: string;
  onClear: () => void;
}
function FilterTag({ label, onClear }: FilterTagProps) {
  return (
    <div className="mb-5 min-w-[100px] py-2 bg-indigo-200 flex justify-center px-2 w-max relative group text-sm text-indigo-600 shadow-lg rounded-md">
      {label}
      <button
        onClick={onClear}
        className="absolute top-0 right-0 p-[0.5px] w-4 h-4 rounded-full flex justify-center items-center bg-indigo-700 hover:cursor-pointer group-hover:scale-110 duration-300 translate-x-1/4 -translate-y-1/4 text-white text-sm"
      >
        <X className="group-hover:scale-110" />
      </button>
    </div>
  );
}
function BreadCrumb({country,countryName}:{country:string,countryName:string}){
  console.log(country);
  return(
    <BreadcrumbDemo
        prev={[{ href: `/${country}`, name: countryName }]}
        now={{
          href: `/jobs/?country=${country}`,
          name: "Jobs"
        }}
        classname="mt-32 pt-7 ml-10"
      />
  )
}
const isValidJobKeyword = (keyword: string): keyword is JobKeyword => {
  return Object.keys(jobIconsMap).includes(keyword);
};

function NewFilters(newfilter:FilterUpdate, filters:JobFilters){
  return{
    ...filters,
    [newfilter.key]:newfilter.value
  }
}
function replaceRouter(newfilter:FilterUpdate, initialFilters:JobFilters, router:AppRouterInstance){
    const params = new URLSearchParams();
    Object.entries(NewFilters(newfilter, initialFilters)).forEach(([key, value]) => {
      if (value && value !== 'none') {
        const paramKey = key === 'industry' ? 'category' : key;
        params.set(paramKey, String(value));
      }
    });
  
    return router.replace(`?${params.toString()}`);
  }
function clearFilter(keyword:string,initialFilters:JobFilters, router:AppRouterInstance){
  if(keyword == "industry"){
    replaceRouter({key:keyword,value:"none"}, initialFilters, router)
  }
  if(keyword == "query"){
    replaceRouter({key:keyword,value:""}, initialFilters, router)
  }
  if(keyword == "type"){
    replaceRouter({key:keyword,value:""}, initialFilters, router)
  }
  else{
    return
  }
}
function ActiveFilters({ filters, onClear,router}: ActiveFiltersProps) {
  if (!filters) return null;

  return (
    <>
      {filters.industry !== "none" && (
        <FilterTag
          label={filters.industry.charAt(0).toUpperCase() + filters.industry.slice(1)}
          onClear={() => onClear("industry",filters, router)}
        />
      )}
      {filters.query && (
        <FilterTag
          label={`"${filters.query}" Jobs`}
          onClear={() => onClear("query",filters, router)}
        />
      )}
      {filters.type && (
        <FilterTag
          label={filters.type === "p" ? "Permanent" : "Contract"}
          onClear={() => onClear("type",filters,router)}
        />
      )}
    </>
  );
}

export default function JobPageClient({
  initialJobs,
  nextPage,
  initialFilters,
  categories
}: JobPageClientProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const filters = initialFilters;
  const countryName = filters.country.charAt(0).toUpperCase() + filters.country.slice(1);
  const handleFilterChange = useCallback(async (newFilter: FilterUpdate) => {
    setIsLoading(true);
    
    try {
      await replaceRouter(newFilter, initialFilters, router);
    } finally {
      setIsLoading(false);
    }
  }, [initialFilters, router]);
  return (
    <section className="min-h-screen w-[80%] max-h-[500vh]">
      <BreadCrumb country={filters.country} countryName={countryName}/>
      <div className="items-center grid grid-cols-4">
        <div className="text-xl md:text-3xl font-bold pt-5 pb-10 flex mx-5 w-full col-span-1">
          <div className="p-2 rounded-full border-2 w-full bg-indigo-400 h-max shadow-md mr-10 flex justify-center mt-5">
            <ComboboxForm
              defaultValue={filters.country}
              onChange={
                (value) => {
                  handleFilterChange({key:"country", value:value});
                }
              }
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full flex flex-col justify-start pt-3 pb-10 pl-4 col-span-3">
          <h1 className="font-bold text-xl ml-1">Job Search</h1>
          <div className="bg-zinc-100 border-2 border-zinc-200 p-3 flex flex-col lg:flex-row gap-y-5 items-center gap-x-5 py-5 w-full mt-3 ml-1 rounded-lg">
            <JobsearchBar
              countrykey={filters.country}
              category={filters.industry}

            />
            <ToKorean />
          </div>
        </div>
      </div>

      <div className="w-full grid items-start grid-cols-4">
        {/* Filters Section */}
        <aside className="ml-5 col-span-1">
          {/* Categories */}
          <h1 className="ml-5 mt-1 font-bold text-xl">Category</h1>
          <div className="mt-6 pl-5 bg-zinc-100 shadow-md pt-1 border-2 border-zinc-200 rounded-lg mr-5 pb-5 pr-5">
            <div className="mt-5 flex text-foreground font-semibold flex-col">
              {categories.map((cat) => {
                const IconComponent = isValidJobKeyword(cat.keyword)
                  ? jobIconsMap[cat.keyword]
                  : null;

                return (
                  <button
                    key={cat.keyword}
                    onClick={() => handleFilterChange({key:"industry", value:cat.keyword})}
                    className={cn(
                      filters.industry === cat.keyword
                        ? "bg-black text-white hover:text-white hover:bg-black"
                        : "hover:bg-zinc-200 active:bg-zinc-300",
                      "py-3 pl-2 flex items-center rounded-md hover:cursor-pointer gap-x-3 w-full text-left"
                    )}
                  >
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <h1 className="ml-5 mt-10 font-bold text-xl">Job type</h1>
          <div className="mt-5 px-5 bg-zinc-100 shadow-md py-5 border-2 border-zinc-200 rounded-lg mr-5">
            {WORK_TYPES.map((work) => (
              <button
                key={work.type}
                onClick={() => handleFilterChange({key:"type", value:work.type})}
                className={cn(
                  filters.type === work.type
                    ? "bg-black text-white hover:text-white hover:bg-black"
                    : "hover:bg-zinc-200",
                  "py-3 pl-2 flex font-bold items-center rounded-md hover:cursor-pointer gap-x-3 w-full text-left"
                )}
              >
                {work.name}
              </button>
            ))}
          </div>

          <div className="mt-20 mr-5">
            <BackgroundGradientDemo />
          </div>
          <div className="mt-10 mr-5">
            <CareerJetCta />
          </div>
        </aside>

        {/* Jobs List Section */}
        <main className="col-span-3">
          <div className="flex items-center gap-x-10 flex-wrap">
            <h1 className="ml-5 mb-5 text-xl font-bold">
              {filters.industry === "none"
                ? "Jobs"
                : `${
                    filters.industry.charAt(0).toUpperCase() +
                    filters.industry.slice(1)
                  } Jobs`}
            </h1>

            {/* Active Filters */}
            <ActiveFilters filters={filters} onClear={clearFilter} router={router} />
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
            </div>
          ) : (
            <JobList
              key={`${initialFilters.country}-${initialFilters.industry}-${initialFilters.query}-${initialFilters.page}-${initialFilters.type}`}
              joblist={initialJobs}
              nextPage={nextPage}
              country={initialFilters.country}
              industry={initialFilters.industry}
              s={initialFilters.query}
              pageNum={String(initialFilters.page)}
              type={initialFilters.type}
            />
          )}
        </main>
      </div>
    </section>
  );
}