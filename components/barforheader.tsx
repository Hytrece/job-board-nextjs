"use client"
import DrawDown from "./drawdown";
import { Separator } from "./ui/separator";
import LoginButton from "./ui/loginbutton";
import Image from "next/image";
import {cn} from "@/lib/utils";
import React, {useState, useEffect} from "react";
import UserBar from "./userbar";
import { SignedIn,SignedOut } from "@clerk/nextjs";
import { X } from "lucide-react";
interface Profile{
  firstName: React.ReactNode | null, 
  lastName: React.ReactNode | null,
  photo: string,
}
export default function BarforHeader({firstName, lastName, photo}: Profile) {
  const [banner, setBanner] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [BannerVisible, setBannerVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isBannerVisible = currentScrollPos < 50 // Adjust this value based on your banner height
      const isNavbarVisible = prevScrollPos > currentScrollPos

      setBannerVisible(banner && isBannerVisible)
      setVisible(isNavbarVisible || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
      setHasScrolled(true)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  function handleClick() {
    setBanner(false)
    setBannerVisible(false)
  }
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-50">
        {BannerVisible && (
          <div className="w-full bg-zinc-800 h-[50px] text-white flex justify-center items-center text-sm gap-x-5 font-medium">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
            </svg>
            <h1 className="tracking-wide">As much as we try hard to provide accurate information, the information below might be inaccurate or out of date.</h1>
            <button onClick={handleClick} className="hover:cursor-pointer">
              <X />
            </button>
          </div>
        )}
        <div 
          className={`w-full z-40 flex shadow-md items-center shadow-b bg-white justify-between ${
            hasScrolled ? 'transition-transform duration-300 ease-in-out' : ''
          } ${
            visible ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{
            top: BannerVisible ? '50px' : '0',
          }}
        >
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
      </div>
    </div>
  )
}
