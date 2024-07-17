"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
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

  const router = useRouter();
  function onSubmit(data: z.infer<typeof FormSchema>) {
    const url = "/" + data.language;
    router.push(url);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="gap-x-3 flex">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[350px] justify-between transition duration-75 hover:border-2 hover:border-primary",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        <div className="flex gap-x-3">
                          <div>
                            {
                              countries.find(
                                (country) => country.value === field.value,
                              )?.label
                            }
                          </div>
                          <Image
                            src={`/${
                              countries.find(
                                (country) => country.value === field.value,
                              )?.value
                            }.png`}
                            width={25}
                            height={15}
                            alt="flag"
                          />
                        </div>
                      ) : (
                        "Select Country"
                      )}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
                              form.setValue("language", country.value);
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
        <Button type="submit" className="w-[100px]">
          Explore
        </Button>
      </form>
    </Form>
  );
}
