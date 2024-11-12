import Image from "next/image";
import { Separator } from "./ui/separator";
import DrawDown from "./drawdown";
import { SignedIn,SignedOut } from "@clerk/nextjs";
import Link from "next/link";
const Bar = () => {
  return (
    <div className="w-screen z-20 absolute top-0">
      <div className="w-full flex justify-between items-center py-5 text-white px-10">
        <Link href="/" className="font-semibold text-gradient hover:cursor-pointer text-3xl">VIKB.IO</Link>
        <div className="flex flex-nowrap ml-20 w-[60%] justify-between items-center text-md md:text-lg lg:text-xl invisible sm:visible font-medium">
          <div className="hover:cursor-pointer z-20 hover:scale-105 animate duration-500 ">
            <DrawDown />
          </div>
          <Separator className="font-semibold" orientation="vertical" />
          <div className="hover:cursor-pointer hover:scale-105 animate duration-500">Jobs</div>
          <Separator orientation="vertical" />
          <div className="hover:cursor-pointer hover:scale-105 animate duration-500">Blog</div>
          <Separator orientation="vertical" />
          <div className="text-nowrap hover:cursor-pointer hover:scale-105 animate duration-500 ">
            About Us
          </div>
          <Separator orientation="vertical" />
          <SignedOut>
            <Link href="/MyJobs" className="p-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600" />
                  <div className="px-8 py-2 flex items-center gap-x-4 relative group transition duration-200 text-white bg-transparent">
                      <h1 className="">Login</h1>
                  </div>
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/MyJobs" className="p-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600" />
                  <div className="px-4 py-2 flex items-center gap-x-4 relative group transition duration-200 text-white bg-transparent">
                      <h1 className="">My Jobs</h1>
                  </div>
            </Link>
          </SignedIn>
        </div>
      </div>
      <div className="sm:invisible absolute right-10 top-10">
        <Image src="/menu.svg" width={50} height={50} alt="menu" />
      </div>
    </div>
  );
};
export default Bar;
