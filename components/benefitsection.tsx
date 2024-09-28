"use client"
import Image from "next/image"
import { CardSpotlight } from "@/components/ui/card-reveal";
import {useEffect, useRef, useState} from "react"
const BenefitSection = () => {
    const features = [
        {
            title: "Fast Refresh",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            title: "Analytics",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            title: "Datacenter security",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            title: "Build on your terms",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        }
    ]
    const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>(new Array(features.length).fill(false))
    const featureRefs = useRef<(HTMLDivElement | null)[]>([])
    useEffect(()=>{
      const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            const index = featureRefs.current.findIndex((ref)=>ref === entry.target)
            if(index !== -1){
              setVisibleFeatures(prev => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }
          }
        })
      },{ threshold: 0.1 })
      featureRefs.current.forEach((ref)=>{
        if(ref) observer.observe(ref)
      })
      return ()=>observer.disconnect()
    },[]
  )
    return(
        <section className="w-full mt-28 mx-auto px-4 py-7 md:px-8">
        <div className="max-w-xl">
          <h4 className="text-primary font-semibold text-lg">Benefits</h4>
          <div className="flex gap-x-7 items-center">
            <h1 className="text-2xl font-bold mt-5 sm:text-2xl">
              Benefits of working holiday in Canada
            </h1>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 w-full rounded-xl overflow-hidden bg-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-12 px-5">
            {features.map((feature,index)=>(
              <div key={index} ref={el => featureRefs.current[index] = el}
              className="transition-all duration-1000 ease-out delay-250"
              style={{
                opacity: visibleFeatures[index] ? 1 : 0,
                transform: `translateY(${visibleFeatures[index] ? '0px' : '100px'})`
              }}>
                <CardSpotlight  className="px-8 py-20 flex flex-col gap-y-8 ">
                  <div className="bg-violet-600 text-white w-16 h-16 rounded-full z-10 flex justify-center items-center text-2xl font-bold">{index+1}</div>
                  <div className="text-white text-lg font-semibold z-10 leading-loose">
                    {feature.desc}
                  </div>
                </CardSpotlight>
              </div>
            ))}
          </div>
          <div className="w-full h-full relative">
            <Image src="/canada_benefit_1.jpg" fill={true} className="brightness-75" alt="tower" objectFit="cover"/>
          </div>
        </div>
      </section>
    )
}
export default BenefitSection