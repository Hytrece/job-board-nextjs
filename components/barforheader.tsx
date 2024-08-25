"use client"
import DrawDown from "./drawdown";
import { Separator } from "./ui/separator";
import LoginButton from "./ui/loginbutton";
import Image from "next/image";
import {cn} from "@/lib/utils";
import React, {useState, useEffect} from "react";
import UserBar from "./userbar";
import { SignedIn,SignedOut } from "@clerk/nextjs";
interface Profile{
  firstName: React.ReactNode | null, 
  lastName: React.ReactNode | null,
  photo: string,
}
const BarforHeader = ({firstName,lastName,photo}:Profile) => {
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
    (scrolledDown&& positionY >= 20   ? " -translate-y-[100px]" : "")
    return(
        <div className={cn(attribute,"w-full fixed z-40 flex shadow-md bg-white shadow-b justify-between items-center top-0")}>
        <h1 className="font-bold text-gradient ml-16 text-3xl">VIKB.IO</h1>
        <div className="flex flex-nowrap text-center items-center w-max h-max gap-x-12 text-sm md:text-md p-1 invisible sm:visible font-semibold">
          <div className="hover:cursor-pointer border-b-2 border-white h-full py-6 hover:border-indigo-600">
            <DrawDown />
          </div>
          <Separator className="font-semibold" orientation="vertical" />
          <div className="hover:cursor-pointer border-b-2 border-white h-full py-6 hover:border-indigo-600">Jobs</div>
          <Separator orientation="vertical" />
          <div className="hover:cursor-pointer border-b-2 border-white h-full py-6 hover:border-indigo-600">Blog</div>
          <Separator orientation="vertical" />
          <div className="text-nowrap hover:cursor-pointer border-white border-b-2 h-full py-6 hover:border-indigo-600">
            About Us
          </div>
          <Separator orientation="vertical" />
        </div>
        <div className="flex gap-5 mr-5 justify-between">
            <Image
              src="/language.svg"
              width={30}
              height={30}
              alt="globe"
              className="hover:cursor-pointer"
            />
            <UserBar firstName={firstName} lastName={lastName} photo={photo} />
          </div>
      </div>
    );
}
export default BarforHeader;