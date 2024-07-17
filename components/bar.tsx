import Image from "next/image";
import ModeToggle from "@/components/togglemode";
import { Separator } from "./ui/separator";
import DrawDown from "./drawdown";
const Bar = () => {
  return (
    <div className="w-screen">
      <div className="w-full flex justify-between p-10 border-4 ">
        <h1 className="font-bold text-gradient text-3xl">IMINI.IO</h1>
        <div className="flex flex-nowrap ml-20 w-[60%] justify-between text-md md:text-lg lg:text-xl invisible sm:visible font-semibold">
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
              width={40}
              height={40}
              alt="globe"
              className="hover:cursor-pointer"
            />
            <Image
              src="/person.svg"
              width={40}
              height={40}
              alt="person"
              className="hover:cursor-pointer"
            />
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="sm:invisible absolute right-10 top-10">
        <Image src="/menu.svg" width={50} height={50} alt="menu" />
      </div>
    </div>
  );
};
export default Bar;
