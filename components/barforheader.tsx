"use client"
import DrawDown from "./drawdown";
import { Separator } from "./ui/separator";
import LoginButton from "./ui/loginbutton";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {useState, useEffect} from "react";
const BarforHeader = () => {
    const [scrolledDown, setScrolledDown] = useState(false);
    const [positionY, setpositionY] = useState(0);
    const onScroll = () => {
        if (window.scrollY > positionY) {
        setScrolledDown(true);
        setpositionY(window.scrollY);
        } else {
        setScrolledDown(false);
        setpositionY(window.scrollY);
        }
    };
    useEffect(() => {
    window.addEventListener("scroll", onScroll);
    });
    const attribute =
    "transition transform duration-400" +
    (scrolledDown ? " -translate-y-[100px]" : "");
    return(
        <div className={cn(attribute,"w-full max-w-[1400px] fixed z-40 bg-white flex justify-between items-center p-3 top-0")}>
        <h1 className="font-bold text-gradient text-3xl">IMINI.IO</h1>
        <div className="flex flex-nowrap text-center items-center ml-20 w-[60%] justify-between text-sm md:text-md invisible sm:visible font-semibold">
          <div className="hover:cursor-pointer hover:text-primary">
            <DrawDown />
          </div>
          <Separator className="font-semibold" orientation="vertical" />
          <div className="hover:cursor-pointer hover:text-primary">Jobs</div>
          <Separator orientation="vertical" />
          <div className="hover:cursor-pointer hover:text-primary">Blog</div>
          <Separator orientation="vertical" />
          <div className="text-nowrap hover:cursor-pointer hover:text-primary ">
            About Us
          </div>
          <Separator orientation="vertical" />
          <div className="flex gap-5 justify-between">
            <Image
              src="/language.svg"
              width={30}
              height={30}
              alt="globe"
              className="hover:cursor-pointer"
            />
            <LoginButton/>
          </div>
        </div>
      </div>
    );
}
export default BarforHeader;