"use client"
import { Mail } from 'lucide-react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { z } from "zod"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
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
import { zodResolver } from "@hookform/resolvers/zod"
import { BackgroundBeams } from "./ui/background-beams";
 
const formSchema = z.object({
    username: z.string().email({ message: 'Invalid email address' })
  })

const Subscribe = ({country}:{country:String}) => {
   const {toast} = useToast();
    const words = [
        {
          text: "Interested",
        },
        {
          text: "in",
        },
        {
          text: "Canada?",
          className: "underline decoration-primary",
        },
      ];
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })
     
      function onSubmit(values: z.infer<typeof formSchema>) {
        toast({ title: "Subscribed!",
          description: "Now you will receive newletters from IMINI.IO",});
      }
    return(
        <section className="w-full mb-6 flex flex-col relative justify-center py-20 items-center">
            <div className="flex flex-col items-center text-center gap-y-8 pb-8 z-10">
            <h1 className="text-5xl font-bold"><TypewriterEffectSmooth words={words}/></h1>
            <h2 className="text-md font-medium text-muted-foreground">Subscribe to our newsletter to get newest updates on jobs, information, and more!</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-x-8 justify-center flex">
                <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input placeholder="Type your Email" className="w-[300px]" {...field}/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                    )}
                />
            <Button type="submit" className="self-start">Submit</Button>
            </form>
        </Form>
        </div>
        <BackgroundBeams/>
        </section>
    )
}
export default Subscribe;