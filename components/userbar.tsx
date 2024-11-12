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
import LoginButton from "./ui/loginbutton";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
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
    const name = (firstName || lastName) ? `${firstName} ${lastName}` : userName
    return (
      <div>
        <SignedOut>
          <Link href = "/sign-in" className="w-full h-full">
            <div className=" bg-red-500 bg-gradient-to-r px-5 py-3 flex justify-center gap-x-3 items-center text-white from-indigo-500 to-purple-500 w-full h-full rounded-lg">
              <h1 className="text-semibold">Login</h1>
              <User/>
            </div>
          </Link>
        </SignedOut>
        <SignedIn>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
              <div className="flex justify-center ">
                <div className="w-10 h-10 relative bg-gradient-to-r flex justify-center items-center from-indigo-500 to-purple-500 rounded-full">
                  <div className="w-[85%] h-[85%] rounded-full relative overflow-hidden">
                    <Image src={photo} fill={true} alt="profilepic" />
                  </div>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/MyJobs">My Jobs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem><SignOutButton/></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SignedIn>
      </div>
      )
}
export default UserBar; 