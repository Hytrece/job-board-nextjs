"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CountryHeaderProps {
  name: string
  bgImage: string
}

export default function CountryHeader({ name, bgImage }: CountryHeaderProps) {
  return (
    <div className="relative w-full h-[550px]">
      <div className="sm:invisible absolute right-10 top-10 z-10">
        <Image src="/menu.svg" width={50} height={50} alt="menu" />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={bgImage}
          layout="fill"
          objectFit="cover"
          alt={name}
          className="brightness-50"
        />
      </div>
      <motion.div 
        className="absolute inset-0 flex items-center w-full mt-16 justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-8xl font-bold text-white z-10">
          {name}
        </h1>
      </motion.div>
    </div>
  )
}