"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {useRouter} from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const formSchema = z.object({
    keyword: z.string().min(0, {
      message: "Keyword must be at least 2 characters.",
    }),
  })
const JobsearchBar = ({countrykey, category}:{countrykey:string, category:string}) => {
    const searchParams = useSearchParams();
    const search = category as string;
    const countrykeyword = countrykey as string;
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          keyword: "",
        },
      })
    const router = useRouter();

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.push(`?${search==""?new URLSearchParams({q:values.keyword}):new URLSearchParams({country:countrykeyword, category:search, q:values.keyword})}`)
    }
    

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-x-2 flex shrink-1 ">
                <FormField
                control={form.control}
                name="keyword"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input placeholder="Job title:" {...field} className="md:w-[400px] w-[300px] border-zinc-400 border-2" />
                    </FormControl>
                    </FormItem>
                )}
                />
                <Button type="submit" variant="default" className="bg-black">Search</Button>
        </form>
    </Form>
    )
}
export default JobsearchBar;