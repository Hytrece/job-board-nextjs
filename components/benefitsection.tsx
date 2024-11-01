"use client"
import Image from "next/image"
import { CardSpotlight } from "@/components/ui/card-reveal";
import {useEffect, useRef, useState} from "react"
import { benefits } from "@/constants/benefits";
const BenefitSection = ({country}:{country:string}) => {
    const getCountry = benefits.find((e)=>e.country == country)
    const features = getCountry?.benefitList || [];
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
                  <div className="flex gap-x-5">
                  <div className="text-2xl font-bold shrink-0 text-white bg-violet-500 rounded-full p-1 z-10 w-10 h-10 flex justify-center items-center">
                    {index+1}
                    </div>
                    <div className='bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-2xl z-10 text-transparent'>
                      {feature.title}
                    </div>
                  </div>
                  <div className="text-white text-lg font-semibold z-10 leading-loose">
                    {feature.desc}
                  </div>
                </CardSpotlight>
              </div>
            ))}
          </div>
          <div className="w-full h-full relative">
            <Image src={`/${country}/benefit.jpg`} fill={true} className="brightness-75" alt="tower" objectFit="cover"/>
          </div>
        </div>
      </section>
    )
}
export default BenefitSection