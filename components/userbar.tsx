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
import { SignInButton } from "@clerk/nextjs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Image from "next/image";
import ModeToggle from "@/components/togglemode";
import { SignedIn,SignedOut } from "@clerk/nextjs";
import Link from "next/link";
const UserBar = () => {
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
    return (<Sheet>
        <SignedOut>
          <Link href = "/sign-up" className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-4 py-2 rounded-[6px] flex items-center gap-x-4 relative group transition duration-200 text-white bg-transparent">
                <h1 className="text-semibold">Sign Up</h1>
                <User/>
            </div>
          </Link>
        </SignedOut>
        <SignedIn><SheetTrigger><LoginButton/></SheetTrigger></SignedIn>
        <SheetContent side = "right" className="w-[400px] sm:w-[540px]">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <SheetHeader className="rounded-md pb-1 px-2 mt-2 hover:bg-zinc-200">
              <SheetTitle>
                <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-x-5 items-center">
                <Avatar>
                <AvatarImage src="/avatar.svg" alt="user" />
                <AvatarFallback>User</AvatarFallback>
                </Avatar>
                <h1 className="font-semibold text-black">D.H Hyun</h1>
                </div>
                <Image src="/chevron-up-down.svg" width={24} height={24} alt="arrow"/>
                </div>
              </SheetTitle>
              <SheetDescription>
                My Profile
              </SheetDescription>
            </SheetHeader>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[270px] -translate-x-[20px]">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ul className="gap-y-5 mt-7">
        {elements.map((element)=>(
          <li key={element.title} className="rounded-md p-5 mt-3 flex items-center justify-start gap-x-3  group hover:cursor-pointer hover:bg-zinc-200">
            <Image src={element.icon} width={24} height={24} alt="icon" />
            <h1 className="font-semibold text-muted-foreground group-hover:text-black">{element.title}</h1>
          </li>
        ))}
        <div className="p-[3px] mt-3 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md" />
        <div className="flex items-center justify-start p-5 gap-x-3 bg-white rounded-md relative group transition duration-200 hover:cursor-pointer text-black hover:bg-transparent">
          <Image src="/plan.svg" width={24} height={24} alt="ai resume generator"/>
          <h1 className="font-semibold">AI Resume Generator</h1>
        </div>
      </div>
      <ModeToggle/>
        </ul>
        </SheetContent>
      </Sheet>)
}
export default UserBar; 