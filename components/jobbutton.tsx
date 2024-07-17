"use client";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface Job {
  name: string;
  src: string;
}
const JobButton = ({ job, num }: { job: Job; num: string }) => {
  const { ref: myRef, inView: myElementVisible } = useInView();
  const attribute =
    "transition transform duration-1000 text-white" +
    (myElementVisible ? "blur-none text-white" : "translate-y-[75px] blur-2xl");
  const attribute2 =
    "transition transform duration-1000 delay-700" +
    (myElementVisible ? "blur-none" : "translate-y-[75px] blur-2xl");
  return (
    <div
      key={job.name}
      ref={myRef}
      className="rounded-lg h-[150px] w-[300px] hover:cursor-pointer overflow-hidden items-center bg-zinc-700 shadow-md shadow-zinc-900 relative flex "
    >
      <div className="h-full w-[50%] relative rounded-lg">
        <Image src={job.src} alt="job" fill={true} objectFit="cover" />
      </div>
      <div className="justify-center w-[50%] items-center flex flex-col">
        <h2
          className={cn(
            "text-center font-md text-white text-xl z-20 hover:scale-105",
            attribute,
          )}
        >
          {job.name}
        </h2>
        <h3 className={cn("mt-2 font-light text-sm text-zinc-400", attribute2)}>
          {num}+ Jobs
        </h3>
      </div>
    </div>
  );
};

export default JobButton;
