"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRef } from "react";
const countries = [
  { value: "australia", label: "Australia" },
  { value: "austria", label: "Austria" },
  { value: "belgium", label: "Belgium" },
  { value: "canada", label: "Canada" },
  { value: "chile", label: "Chile" },
  { value: "czech republic", label: "Czech Republic" },
  { value: "denmark", label: "Denmark" },
  { value: "finland", label: "Finland" },
  { value: "france", label: "France" },
  { value: "germany", label: "Germany" },
  { value: "hong kong", label: "Hong Kong" },
  { value: "hungary", label: "Hungary" },
  { value: "ireland", label: "Ireland" },
  { value: "israel", label: "Israel" },
  { value: "italy", label: "Italy" },
  { value: "japan", label: "Japan" },
  { value: "netherlands", label: "Netherlands" },
  { value: "new zealand", label: "New Zealand" },
  { value: "norway", label: "Norway" },
  { value: "poland", label: "Poland" },
  { value: "portugal", label: "Portugal" },
  { value: "slovakia", label: "Slovakia" },
  { value: "spain", label: "Spain" },
  { value: "sweden", label: "Sweden" },
  { value: "taiwan", label: "Taiwan" },
  { value: "united kingdom", label: "United Kingdom" },
] as const;

const FormSchema = z.object({
  language: z.string({
    required_error: "Please select a Country.",
  }),
});

export default function ComboboxForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const path = usePathname();
  const countryPage = path.split("/")[1];
  console.log(countryPage);
  const router = useRouter();
  const formRef = useRef(null);
  function onSubmit(data: z.infer<typeof FormSchema>) {
    const url = `/${data.language}/jobs`;
    router.push(url);
  }
  const handleSelect = (data:string)=>{
    form.setValue("language",data)
    form.trigger("language").then((isValid)=>{
      if(isValid){
        onSubmit({"language":data});
      }
      else{
        console.log("error");
      }
    })
  }

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="w-full flex">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full min-h-[80px] rounded-full h-max box-border transition duration-75",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {countryPage ? (
                        <div className="flex w-full justify-between items-center">
                         <div className="w-[70px] h-[70px] relative overflow-hidden shrink-0 rounded-full">
                          <Image
                            src={`/${
                              countries.find(
                                (country) => country.value === countryPage,
                              )?.value
                            }.png`}
                            fill={true}
                            objectFit="cover"
                            alt="flag"
                            className="shrink-0"
                          />
                        </div>
                        <div className="text-md lg:text-xl shrink-1 hidden xl:block font-bold">
                            {
                              countries.find(
                                (country) => country.value === countryPage,
                              )?.label
                            }
                          </div>
                        <ChevronsUpDown className="h-8 w-8 shrink-1 opacity-50" />
                    </div>
                      ) : (
                        <div className="flex justify-between">
                          <div className="text-xl font-bold">Select Country</div>
                          <ChevronsUpDown className="ml-8 h-8 w-8 shrink-0 opacity-50" />
                        </div>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[350px] p-0">
                  <Command>
                    <CommandInput placeholder="Search Country..." />
                    <CommandEmpty>No Country found.</CommandEmpty>
                    <CommandGroup>
                      <CommandList>
                        {countries.map((country) => (
                          <CommandItem
                            value={country.label}
                            key={country.value}
                            onSelect={() => {
                              handleSelect(country.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                country.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {country.label}
                          </CommandItem>
                        ))}
                      </CommandList>
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
