import Image from "next/image";
import { Separator } from "./ui/separator";
import DrawDown from "./drawdown";
import LoginButton from "./ui/loginbutton";
const Bar = () => {
  return (
    <div className="w-screen z-20 absolute top-0">
      <div className="w-full flex justify-between items-center py-5 text-white px-10">
        <h1 className="font-semibold text-gradient text-3xl">VIKB.IO</h1>
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
            <LoginButton/>
        </div>
      </div>
      <div className="sm:invisible absolute right-10 top-10">
        <Image src="/menu.svg" width={50} height={50} alt="menu" />
      </div>
    </div>
  );
};
export default Bar;
