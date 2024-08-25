import Image from "next/image";
import CountryName from "./countryname";
import BarforHeader from "./barforheader";
const Header = ({ name, bg }: { name: string; bg: string }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="sm:invisible absolute right-10 top-10">
        <Image src="/menu.svg" width={50} height={50} alt="menu" />
      </div>
      <div className="w-full border-b h-[300px] mt-20 -translate-y-[4px] rounded-xl overflow-hidden relative">
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
