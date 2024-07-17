import Image from "next/image";
import Bar from "@/components/bar";
import ComboboxForm from "@/components/combobox";
export default function Home() {
  return (
    <div className="h-screen flex-col space-y-[10%]">
      <Bar />
      <div className="text-center w-full flex justify-center text-8xl font-black ">
        <div className="w-[80%]">
          Explore Endless Possibilities Beyond Borders
        </div>
      </div>
      <div className="flex justify-center gap-x-2 items-center">
        <ComboboxForm />
      </div>
    </div>
  );
}
