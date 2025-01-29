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
    
    return(
        <section className="w-full mt-28 mx-auto px-4 py-7 md:px-8">
        <div className="max-w-xl">
          <h4 className="text-primary font-semibold text-lg">Benefits</h4>
          <div className="flex gap-x-7 items-center">
            <h1 className="text-2xl font-bold mt-5 sm:text-2xl">
              Benefits of working holiday in {country.charAt(0).toUpperCase()+country.substring(1)}
            </h1>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 w-full rounded-xl overflow-hidden bg-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-12 px-5">
            {features.map((feature,index)=>(
              <div key={index}
              className="">
                <CardSpotlight className="px-8 py-20 flex flex-col gap-y-8 ">
                  <div className='bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-nowrap text-2xl font-bold z-10 text-transparent'>
                    {feature.title}
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