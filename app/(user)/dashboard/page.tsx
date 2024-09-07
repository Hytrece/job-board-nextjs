import React from "react";
import { Plus } from 'lucide-react';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Separator } from "@/components/ui/separator";
import { Component } from "@/components/worktracker";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
const Dashboard = () => {
  auth().protect()
  return (
    <section className="w-full relative min-h-screen overflow-y-auto">
            <div className="mt-20 absolute relative left-[10%] ">
                <h1 className="font-bold text-3xl">Welcome Back!</h1>
                <BentoGrid className="absolute md:auto-rows-[20rem] w-[65%] mt-7">
                    {items.map((item, i) => (
                        <BentoGridItem
                        key={i}
                        className={item.className}
                        content={item.content}
                        />
                    ))}
                </BentoGrid>
            </div>
    </section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    className: "md:col-span-2",
    content: (
      <div>
        <h1 className="text-lg ml-5 font-semibold">Recent Updates</h1>
        <div className="p-5 px-8 mt-10 flex justify-between items-center">
          <div>
          <h2 className="font-semibold">Canada</h2>
          <h3 className="font-medium text-zinc-500 mt-3">Working Holiday Recruitment</h3>
          </div>
          <div>
            <p className="text-3xl text-green-600"><span className="text-sm mr-3 text-black">starts</span>8/3</p>
          </div>
        </div>
        <div className="px-8"><Separator/></div>
        <div className="p-5 px-8 flex justify-between items-center">
          <div>
          <h2 className="font-semibold">Australia</h2>
          <h3 className="font-medium text-zinc-500 mt-3">Working Holiday Recruitment</h3>
          </div>
          <div>
            <p className="text-3xl text-pink-600"><span className="text-sm mr-3 text-black">ends</span>10/9</p>
          </div>
        </div>

      </div>
    )
  },
  {
    className: "md:col-span-1",
    content: (
      <div>
        <h1 className="text-lg ml-5 font-semibold">Work Holiday Tracker</h1>
        <div className="">
          <Component/>
        </div>
      </div>
    )
  },
  {
    className: "md:col-span-1",
    content: (
      <div className="relative h-full">
        <h1 className="text-lg ml-5 font-semibold">My Jobs</h1>
        <div className="mt-3 p-3 flex flex-col gap-y-5">
            <div className="flex justify-between text-indigo-700">
              <div>Cafe & Barista</div>
              <div>2 Jobs</div>
            </div>
            <div className="flex justify-between text-violet-700">
              <div>Developer</div>
              <div>2 Jobs</div>
            </div>
        </div>
        <div className="flex flex-col gap-y-5 items-center w-full mt-10 ">
          <Button size="icon" className="text-indigo-600 bg-indigo-100 hover:cursor-pointer rounded-full hover:text-indigo-700 hover:bg-indigo-200">
            <Plus className="h-6 w-6"/>
          </Button>
          <div>Add More Jobs</div>
        </div>
      </div>
    )
  },
  {
    className: "md:col-span-2",
    content: (
      <div>
        <h1 className="text-lg ml-5 font-semibold">Job Recommendation</h1>
        <div className="flex flex-col mt-5 px-5 p-3 w-full gap-y-5">
          <div className="w-full bg-indigo-500 p-3 rounded-xl text-white flex gap-x-3 hover:cursor-pointer hover:opacity-80">
            <div>Job 1</div>
            <div>Category</div>
            <div>Country</div>
          </div>
          <div className="w-full bg-pink-500 p-3 rounded-xl text-white flex gap-x-3 hover:cursor-pointer hover:opacity-80">
            <div>Job 2</div>
            <div>Category</div>
            <div>Country</div>
          </div>
          <div className="w-full bg-violet-500 p-3 rounded-xl text-white flex gap-x-3 hover:cursor-pointer hover:opacity-80">
            <div>Job 3</div>
            <div>Category</div>
            <div>Country</div>
          </div>
        </div>
      </div>
    )
  },
];




export default Dashboard;