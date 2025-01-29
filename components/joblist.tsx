"use client"

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, LoaderCircle, Check, CircleX,Heart} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { saveJob } from "@/actions/jobs.actions";
import { cn, checkNullandCall, formatDate } from "@/lib/utils";

// Types
interface Job {
  _id: string;
  url: string;
  title: string;
  company: string;
  location: string;
  date: string;
  salary: string;
  category: string;
  contracttype: 'p' | 'c';
}

interface JobListProps {
  joblist: Job[];
  nextPage: number;
  country: string;
  industry: string;
  s: string;
  pageNum: string;
  type: string;
}

// Loading states enum for better type safety
enum SaveStatus {
  IDLE = 0,
  LOADING = 1,
  SUCCESS = 2,
  ERROR = 3,
}

// Subcomponents for better organization
const SaveJobDialog = ({
  isLoading,
  onSave,
  onNavigate,
  onReset
}: {
  isLoading: SaveStatus;
  onSave: () => void;
  onNavigate: () => void;
  onReset: () => void;
}) => {
  if (isLoading === SaveStatus.SUCCESS) {
    return (
      <div>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-x-3">
            Job successfully saved! <Check className="text-green-500" />
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-end w-full gap-x-5 mt-3">
          <Button className="bg-black w-[150px]" onClick={onNavigate}>
            Go to dashboard
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="w-[100px]">
              Close
            </Button>
          </DialogClose>
        </div>
      </div>
    );
  }

  if (isLoading === SaveStatus.ERROR) {
    return (
      <div className="w-full p-5 h-full flex flex-col text-xl font-semibold items-center justify-center">
        <div>Something Went Wrong!</div>
        <CircleX className="text-pink-500 font-semibold text-3xl" />
      </div>
    );
  }

  return (
    <div>
      <DialogHeader>
        <DialogTitle>Save this Job?</DialogTitle>
        <DialogDescription>
          You can check your saved jobs in your dashboard.
        </DialogDescription>
      </DialogHeader>
      <div className="flex justify-end w-full gap-x-5 mt-3 items-center">
        <Button className="bg-black w-[100px]" onClick={onSave}>
          {isLoading === SaveStatus.LOADING ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            "Save"
          )}
        </Button>
        <DialogClose asChild>
          <Button type="button" variant="secondary" className="w-[100px]" onClick={onReset}>
            Close
          </Button>
        </DialogClose>
      </div>
    </div>
  );
};

const JobCard = ({ 
  job, 
  onSave,
}: { 
  job: Job;
  onSave: (jobId: string) => void;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<SaveStatus>(SaveStatus.IDLE);

  const handleSave = async (jobId: string) => {
    try {
      setIsLoading(SaveStatus.LOADING);
      await onSave(jobId);
      setIsLoading(SaveStatus.SUCCESS);
    } catch (error) {
      setIsLoading(SaveStatus.ERROR);
    }
  };

  return (
    <div className="w-full min-h-[150px] group hover:cursor-pointer mb-5 bg-zinc-100 border-2 rounded-md border-zinc-200">
      <div className="flex mt-5 pb-5 px-4 justify-between items-start">
        <div className="flex flex-col">
          <div className="flex items-start group gap-x-4">
            <h1 className="font-bold text-lg max-w-[500px]">{job.title}</h1>
            <Dialog>
              <DialogTrigger>
                <button className="z-10">
                  <div className="hover:cursor-pointer transition-all group-hover:visible invisible hover:scale-110 hover:text-indigo-600">
                    <Heart className="w-7 h-7"/>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent>
                <SaveJobDialog
                  isLoading={isLoading}
                  onSave={() => handleSave(job._id)}
                  onNavigate={() => router.push("/myjobs")}
                  onReset={() => setIsLoading(SaveStatus.IDLE)}
                />
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex items-center mt-5 gap-x-5">
            <div className="text-primary rounded-full bg-white p-1 px-2 text-sm w-max">
              {formatDate(job.date)}
            </div>
            {job.salary && (
              <div className="text-pink-600 rounded-full bg-white p-1 px-2 text-sm w-max">
                {job.salary}
              </div>
            )}
          </div>
          <div className="flex items-center mt-5 gap-x-5">
            <div className="text-indigo-600 rounded-full bg-white p-1 px-2 text-sm w-max">
              {job.category.charAt(0).toUpperCase() + job.category.slice(1)}
            </div>
            <div
              className={cn(
                job.contracttype === "p" ? "text-violet-600" : "text-amber-600",
                "rounded-full bg-white p-1 px-2 text-sm w-max"
              )}
            >
              {job.contracttype === "p" ? "Permanent" : "Contract"}
            </div>
          </div>
        </div>
        <div className="flex flex-col text-muted-foreground w-[30%] gap-y-4">
          <div className="flex gap-x-2 items-center">
            <Image src="/business.svg" width={20} height={20} alt="company" />
            <h2 className="font-medium">{job.company}</h2>
          </div>
          <div className="flex gap-x-2 items-center">
            <Image src="/location.svg" width={20} height={20} alt="location" />
            <p className="font-medium">{job.location}</p>
          </div>
          <Link
            href={job.url}
            className="text-indigo-600 p-1 rounded-full bg-white w-max px-4 animate border-2 border-white hover:border-indigo-600 hover:bg-indigo-600 hover:text-white duration-500 font-semibold flex gap-x-1 mt-8"
          >
            Continue with CareerJet
            <MoveRight className="transition w-[20px] transform group-hover:translate-x-1 duration-100" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function JobList({
  joblist,
  nextPage,
  country,
  industry,
  s,
  pageNum,
  type,
}: JobListProps) {
  const [isLoading, setIsLoading] = useState<SaveStatus>(SaveStatus.IDLE);
  const router = useRouter();
  const { isSignedIn, userId } = useAuth();
  const pageNumInt = parseInt(pageNum, 10);

  const handleSaveJob = async (jobId: string) => {
    if (!isSignedIn) {
      router.push("/sign-up");
      return;
    }

    try {
      setIsLoading(SaveStatus.LOADING);
      const res = await saveJob(userId!, jobId);
      
      if (res.status === 200) {
        setIsLoading(SaveStatus.SUCCESS);
      } else {
        setIsLoading(SaveStatus.ERROR);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(SaveStatus.ERROR);
    }
  };

  if (joblist.length === 0) {
    return (
      <div className="text-primary w-full flex justify-center mt-16 text-3xl font-semibold">
        No results found
      </div>
    );
  }

  return (
    <>
      <ul className="mb-1 ml-5">
        {joblist.map((job) => (
          <JobCard 
            key={job.url} 
            job={job} 
            onSave={handleSaveJob}
          />
        ))}
      </ul>

      <Pagination className="mt-10 mb-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`?${checkNullandCall({
                country,
                page: String(pageNumInt - 1),
                industry,
                s,
                type,
              })}`}
              className={cn(
                pageNum === "1" ? "hidden" : "",
                "text-center min-w-[100px] bg-indigo-200 rounded-lg p-2 hover:bg-indigo-500 hover:text-white"
              )}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href={`?${checkNullandCall({
                country,
                page: String(pageNumInt + 1),
                industry,
                s,
                type,
              })}`}
              className={cn(
                nextPage === 0 ? "hidden" : "",
                "text-center min-w-[100px] bg-indigo-200 rounded-lg p-2 hover:bg-indigo-500 hover:text-white"
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
