"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
const CountryName = ({ name }: { name: string }) => {
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);
  const attr = isRendered ? "blur-none" : "blur-2xl translate-y-75";
  return (
    <h1
      className={cn(
        "font-bold transition transform delay-1000 text-8xl ml-32 bottom-[40%] text-white absolute z-1",
        attr,
      )}
    >
      {name}
    </h1>
  );
};
export default CountryName;
