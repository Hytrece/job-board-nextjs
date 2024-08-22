"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base font-bold text-indigo-600 sm:text-xl text-black text-nowrap leading-loose mb-2 dark:text-neutral-200">
          Trying to write a resume?
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-loose">
          Our AI builder writes resume in any language for u! 
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Check now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}