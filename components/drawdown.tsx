"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
export const countryData = {
  oceania: [
    { value: "australia", label: "Australia", flag: "/australia.png" },
    { value: "new zealand", label: "New Zealand", flag: "/new zealand.png" },
  ],
  europe: [
    { value: "austria", label: "Austria", flag: "/austria.png" },
    { value: "belgium", label: "Belgium", flag: "/belgium.png" },
    {
      value: "czech republic",
      label: "Czech Republic",
      flag: "/czech republic.png",
    },
    { value: "denmark", label: "Denmark", flag: "/denmark.png" },
    { value: "finland", label: "Finland", flag: "/finland.png" },
    { value: "france", label: "France", flag: "/france.png" },
    { value: "germany", label: "Germany", flag: "/germany.png" },
    { value: "hungary", label: "Hungary", flag: "/hungary.png" },
    { value: "ireland", label: "Ireland", flag: "/ireland.png" },
    { value: "italy", label: "Italy", flag: "/italy.png" },
    { value: "netherlands", label: "Netherlands", flag: "/netherlands.png" },
    { value: "norway", label: "Norway", flag: "/norway.png" },
    { value: "poland", label: "Poland", flag: "/poland.png" },
    { value: "portugal", label: "Portugal", flag: "/portugal.png" },
    { value: "slovakia", label: "Slovakia", flag: "/slovakia.png" },
    { value: "spain", label: "Spain", flag: "/spain.png" },
    { value: "sweden", label: "Sweden", flag: "/sweden.png" },
    {
      value: "united kingdom",
      label: "United Kingdom",
      flag: "/united kingdom.png",
    },
  ],
  america: [
    { value: "canada", label: "Canada", flag: "/canada.png" },
    { value: "chile", label: "Chile", flag: "/chile.png" },
  ],
  asia: [
    { value: "hong kong", label: "Hong Kong", flag: "/hong kong.png" },
    { value: "israel", label: "Israel", flag: "/israel.png" },
    { value: "japan", label: "Japan", flag: "/japan.png" },
    { value: "taiwan", label: "Taiwan", flag: "/taiwan.png" },
  ],
};
export default function DrawDown() {
  return (
    <Sheet>
      <SheetTrigger>Working Holidays</SheetTrigger>
      <SheetContent side="top" className="h-screen lg:h-[85%] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="mt-7 ml-5 text-2xl">
            Working Holidays
          </SheetTitle>
          <SheetDescription className="ml-5 mt-7 text-md">
            These are the list of countries Koreans can visit for a working
            holiday.
          </SheetDescription>
          <div className="ml-5">
            {Object.entries(countryData).map(([continent, countries]) => (
              <div key={continent} className="mt-8">
                <h2 className="font-semibold text-xl mb-5">
                  {continent.charAt(0).toUpperCase() +
                    continent.slice(1).replace("_", " ")}
                </h2>
                <div className="grid grid-cols-4 justify-start lg:grid-cols-5 gap-y-5">
                  {countries.map((country) => (
                    <a
                      href={`/${country.value}`}
                      key={country.value}
                      className="transition delay-75 overflow-hidden hover:scale-105 flex gap-x-4"
                    >
                      <Image
                        src={`${country.flag}`}
                        alt={country.label}
                        width={23}
                        height={20}
                      />
                      <span className="font-semibold">{country.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
