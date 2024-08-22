"use client";
import React, { useState } from "react";
import { CircleUserRound } from "lucide-react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { Plus } from 'lucide-react';

import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { Component } from "@/components/worktracker";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
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


const SidebarDemo = () => {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-200 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-200 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-200 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-200 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1 w-screen h-screen mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between bg-indigo-500 gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <CircleUserRound/>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-whwite py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

export default SidebarDemo;