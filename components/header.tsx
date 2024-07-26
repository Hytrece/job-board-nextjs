import Image from "next/image";
import DrawDown from "./drawdown";
import { Separator } from "./ui/separator";
import ModeToggle from "./togglemode";
import CountryName from "./countryname";
import LoginButton from "./ui/loginbutton";
const Header = ({ name, bg }: { name: string; bg: string }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full max-w-[1400px] fixed z-40 bg-white flex justify-between p-3 top-0">
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
      <div className="sm:invisible absolute right-10 top-10">
        <Image src="/menu.svg" width={50} height={50} alt="menu" />
      </div>
      <div className="w-full border-b h-[300px] rounded-xl overflow-hidden relative">
        <Image
          src={bg}
          fill={true}
          alt={name}
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <CountryName name={name} />
      </div>
    </div>
  );
};
export default Header;
