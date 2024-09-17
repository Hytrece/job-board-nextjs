"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BackgroundBeams } from "./ui/background-beams";
interface Features{
    title:string,
    desc:string
}
import { FileText, Building ,Languages,BriefcaseBusiness } from 'lucide-react';
const CheckList = ({features}:{features:Features[]}) => {
    return (
        <section className="mt-28 mx-10 py-7 ">
        <h4 className="text-primary font-semibold text-lg">Checklist</h4>
        <h1 className="mt-5 font-bold text-2xl">Things to Check before going to Canada</h1>
        <p className="mt-5 font-md leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, cum?</p>
        <Tabs defaultValue="a" className="mt-5">
        <TabsList>
            <TabsTrigger value="a"> <div className="flex items-center gap-x-3"><FileText/> Documents</div></TabsTrigger>
            <TabsTrigger value="b"> <div className="flex items-center gap-x-3"><Building/> Accomodation</div></TabsTrigger>
            <TabsTrigger value="c"><div className="flex items-center gap-x-3"><BriefcaseBusiness/> Employment</div></TabsTrigger>
            <TabsTrigger value="d"> <div className="flex items-center gap-x-3"><Languages/> Others </div></TabsTrigger>
        </TabsList>
        <div className="mt-3 px-12 pt-6 pb-12 bg-zinc-200 w-full flex flex-col relative justify-center rounded-lg">
        <TabsContent value="a">
            <ul className="grid gap-y-8 grid-cols-1">
            {
                features.map((item, idx) => (
                    <li key={idx} className="space-y-3">
                        <div className="flex items-center">
                            <div className="w-12 h-12 border text-indigo-600 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h4 className="text-lg ml-3 text-gray-800 font-semibold">
                                {item.title}
                            </h4>
                        </div>
                        <p className="ml-3">
                            {item.desc}
                        </p>
                    </li>
                ))
            }
        </ul>
        </TabsContent>
        <TabsContent value="b">Change your password here.</TabsContent>
        <TabsContent value="c">Change your password here.</TabsContent>
        <TabsContent value="d">Change your password here.</TabsContent>
        </div>
        </Tabs>
      </section>
    )
}
export default CheckList;