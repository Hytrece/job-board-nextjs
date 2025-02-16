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
  { value: "australia", label: "Australia", korean: "호주" },
  { value: "austria", label: "Austria", korean: "오스트리아" },
  { value: "belgium", label: "Belgium", korean: "벨기에" },
  { value: "canada", label: "Canada", korean: "캐나다" },
  { value: "chile", label: "Chile", korean: "칠레" },
  { value: "czech republic", label: "Czech Republic", korean: "체코" },
  { value: "denmark", label: "Denmark", korean: "덴마크" },
  { value: "finland", label: "Finland", korean: "핀란드" },
  { value: "france", label: "France", korean: "프랑스" },
  { value: "germany", label: "Germany", korean: "독일" },
  { value: "hungary", label: "Hungary", korean: "헝가리" },
  { value: "ireland", label: "Ireland", korean: "아일랜드" },
  { value: "italy", label: "Italy", korean: "이탈리아" },
  { value: "japan", label: "Japan", korean: "일본" },
  { value: "netherlands", label: "Netherlands", korean: "네덜란드" },
  { value: "new zealand", label: "New Zealand", korean: "뉴질랜드" },
  { value: "norway", label: "Norway", korean: "노르웨이" },
  { value: "poland", label: "Poland", korean: "폴란드" },
  { value: "portugal", label: "Portugal", korean: "포르투갈" },
  { value: "spain", label: "Spain", korean: "스페인" },
  { value: "sweden", label: "Sweden", korean: "스웨덴" },
  { value: "taiwan", label: "Taiwan", korean: "대만" },
  { value: "united kingdom", label: "United Kingdom", korean: "영국" },
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
  <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex justify-center gap-x-3">
    <FormField
      control={form.control}
      name="language"
      render={({ field }) => (
        <FormItem className="flex flex-col flex-1 max-w-[300px]">
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between h-14 transition duration-75 hover:border-2 hover:border-primary",
                    !field.value && "text-muted-foreground"
                  )}
                >
                {field.value ? (
                <div className="flex gap-x-3 items-center">
                  <div>
                    {countries.find((country) => country.value === field.value)?.korean}
                  </div>
                  <Image
                    src={`/${countries.find((country) => country.value === field.value)?.value}.png`}
                    width={25}
                    height={15}
                    alt="flag"
                  />
                </div>
              ) : (
                "국가를 선택하세요"
              )}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
              <Command>
                <CommandInput placeholder="나라 검색..." />
                <CommandEmpty>원하시는 나라가 없습니다.</CommandEmpty>
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
                            : "opacity-0"
                        )}
                      />
                      {country.korean}
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
    <Button type="submit" className="w-[100px] h-14">
      검색
    </Button>
  </form>
</Form>
  );
}
