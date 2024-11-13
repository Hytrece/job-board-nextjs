"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IconSquareCheckFilled ,IconScript,IconBriefcase2Filled,IconAffiliateFilled } from '@tabler/icons-react';
import {useState,useRef,useEffect} from "react"
import { checks } from "@/constants/checklist";
const CheckList = ({country}:{country:string}) => {
    const getCountry = checks.find((e)=>e.country == country)
    const eligibility = getCountry?.listA || []
    const documents = getCountry?.listB || []
    const employment = getCountry?.listC || []
    const living = getCountry?.listD || []
    const [isVisible, setIsVisible] = useState<boolean[]>(new Array(documents.length).fill(false))
    const featureRefs = useRef<(HTMLLIElement|null)[]>([])
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    const index = featureRefs.current.findIndex((ref)=>(ref === entry.target))
                    if(index !== -1){
                        setIsVisible(prev=>{
                            const newState = [...prev];
                            newState[index] = true
                            return newState;
                        })
                    }
                }
            })
        },{threshold:0.1})
        featureRefs.current.forEach((ref)=>{
            if(ref) observer.observe(ref)
        })
        return()=>observer.disconnect()
    },[])
    return (
        <section className="mt-28 mx-10 py-7">
        <h4 className="text-primary font-semibold text-lg">Checklist</h4>
        <h1 className="mt-5 font-bold text-2xl">Things to Check before going to Canada</h1>
        <p className="mt-5 font-md leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, cum?</p>
        <Tabs defaultValue="a" className="mt-5">
        <TabsList>
            <TabsTrigger value="a"> <div className="flex items-center gap-x-3"><IconSquareCheckFilled/>Eligibility</div></TabsTrigger>
            <TabsTrigger value="b"> <div className="flex items-center gap-x-3"><IconScript/> Documents</div></TabsTrigger>
            <TabsTrigger value="c"><div className="flex items-center gap-x-3"><IconBriefcase2Filled/> Employment</div></TabsTrigger>
            <TabsTrigger value="d"> <div className="flex items-center gap-x-3"><IconAffiliateFilled/>Living </div></TabsTrigger>
        </TabsList>
        <TabsContent value="a" className="mt-7 h-max">
            <ul className="grid gap-y-1 grid-cols-1 w-full py-4 rounded-xl">
            {
                eligibility.map((item, idx) => (
                    <li key={idx} ref={el => featureRefs.current[idx] = el}
                    className="transition-all py-6 px-5 duration-1000 ease-out delay-300"
                    style={{
                      opacity: isVisible[idx] ? 1 : 0
                    }}>
                        <div className="flex items-center backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-3xl flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-indigo-600 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h4 className="text-lg ml-6 font-semibold">
                                {item.title}
                            </h4>
                        </div>
                        <p className="ml-3 mt-3">
                            {item.description}
                        </p>
                        {idx<eligibility.length-1 ? <div className="h-[0.1px] bg-zinc-300 mt-10"/>:<div></div>}
                    </li>
                ))
            }
        </ul>
        </TabsContent>
        <TabsContent value="b" className="mt-7">
        <ul className="grid gap-y-1 grid-cols-1 w-full py-4 rounded-xl">
            {
                documents.map((item, idx) => (
                    <li key={idx}
                    className="py-6 px-5 ">
                        <div className="flex items-center backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-3xl flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-indigo-600 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h4 className="text-lg ml-6 font-semibold">
                                {item.title}
                            </h4>
                        </div>
                        <p className="ml-3 mt-3">
                            {item.description}
                        </p>
                        {idx<documents.length-1 ? <div className="h-[0.1px] bg-zinc-300 mt-10"/>:<div></div>}
                    </li>
                ))
            }
        </ul>
        </TabsContent>
        <TabsContent value="c" className="mt-7">
        <ul className="grid gap-y-1 grid-cols-1 w-full py-4 rounded-xl">
            {
                employment.map((item, idx) => (
                    <li key={idx}
                    className="py-6 px-5">
                        <div className="flex items-center backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-3xl flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-indigo-600 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h4 className="text-lg ml-6 font-semibold">
                                {item.title}
                            </h4>
                        </div>
                        <p className="ml-3 mt-3">
                            {item.description}
                        </p>
                        {idx<employment.length-1 ? <div className="h-[0.1px] bg-zinc-300 mt-10"/>:<div></div>}
                    </li>
                ))
            }
        </ul>
        </TabsContent>
        <TabsContent value="d" className="mt-7">
        <ul className="grid gap-y-1 grid-cols-1 w-full py-4 rounded-xl">
            {
                living.map((item, idx) => (
                    <li key={idx} 
                    className="py-6 px-5 ">
                        <div className="flex items-center backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-3xl flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-indigo-600 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h4 className="text-lg ml-6 font-semibold">
                                {item.title}
                            </h4>
                        </div>
                        <p className="ml-3 mt-3">
                            {item.description}
                        </p>
                        {idx<living.length-1 ? <div className="h-[0.1px] bg-zinc-300 mt-10"/>:<div></div>}
                    </li>
                ))
            }
        </ul>
        </TabsContent>
        </Tabs>
      </section>
    )
}
export default CheckList;