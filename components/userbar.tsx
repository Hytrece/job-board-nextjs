"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import LoginButton from "./ui/loginbutton";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Image from "next/image";
import ModeToggle from "@/components/togglemode";
import { SignedIn,SignedOut } from "@clerk/nextjs";
import Link from "next/link";
interface Profile{
  firstName:string, 
  lastName: string,
  userName:string,
  photo: string,
}
const UserBar = ({firstName,lastName,userName, photo}:Profile) => {
    const elements = [ 
      {
        title:"Favorites",
        icon:"/heart.svg",
        link:"/favorites",
      },
      {
        title:"Featured Jobs - for you",
        icon:"/bag.svg",
        link:"/jobs"
      },
      {
        title:"Plan",
        icon:"/layer.svg",
        link:"/subscription"
      },
    ]
    return (
      <div>
        <SignedOut>
          <Link href = "/sign-up" className="w-full h-full">
            <div className=" bg-red-500 bg-gradient-to-r px-5 py-3 flex justify-center gap-x-3 items-center text-white from-indigo-500 to-purple-500 w-full h-full rounded-lg">
              <h1 className="text-semibold">Sign Up</h1>
              <User/>
            </div>
          </Link>
        </SignedOut>
        <SignedIn>
          <div className="flex justify-center ">
            <div className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-4 py-2 rounded-[6px] flex items-center gap-x-4 relative group transition duration-200 text-white bg-transparent">
                  <div className="flex items-center font-semibold text-lg">
                  {(firstName == "" ? (
                  <div>
                    <h1 className="text-semibold">{userName}</h1>
                  </div>
                  )
                :(
                  <>
                    <h1 className="text-semibold">{firstName}</h1>
                    <h1 className="text-semibold ml-1">{lastName}</h1>
                  </>
                ))}
                    <div className="relative w-7 h-7 rounded-full overflow-hidden ml-2"><Image src={photo} fill={true} objectFit="cover" alt="profilepic"/></div>
                  </div>
                </div>
            </div>
            <SignOutButton/>
          </div>
        </SignedIn>
      </div>
      )
}
export default UserBar; 