import { fetchJob } from "@/actions/jobs.actions";
import { workingHolidayJobs } from "@/constants/jobs";
import JobPageClient from "@/components/jobpageclient";
import { Suspense } from "react";
import Loading from "./loading";

// Types
interface Category {
  name: string;
  keyword: string;
}

export interface JobFilters {
  country: string;
  industry: string;
  query: string;
  page: number;
  type: string;
}

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function JobPage({ searchParams }: PageProps) {
  const filters: JobFilters = {
    country: (searchParams.country as string) ?? "canada",
    industry: (searchParams.category as string) ?? "none",
    query: (searchParams.q as string) ?? "",
    page: Number(searchParams.page) || 1,
    type: (searchParams.type as string) ?? ""
  };

  try {
    const { joblist, nextPage } = await fetchJob({
      country: filters.country,
      industry: filters.industry,
      s: filters.query,
      pageNumInt: filters.page,
      type: filters.type
    });
    const category = workingHolidayJobs.find(
      (elem) => elem.country === filters.country
    )?.jobList ?? [];

    return (
      <Suspense fallback={<Loading />}>
        <JobPageClient
          initialJobs={joblist}
          nextPage={nextPage}
          initialFilters={filters}
          categories={category}
        />
      </Suspense>
    );
  } catch (error) {
    console.error('Error fetching job data:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Error loading jobs. Please try again later.</p>
      </div>
    );
  }
}