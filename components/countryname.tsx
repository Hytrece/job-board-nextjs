"use client";
import { useState, useRef,useEffect } from "react";
import { motion } from "framer-motion";
const CountryName = ({ name }: { name: string }) => {
  return (
    <div className="h-screen flex items-center font-bold text-8xl bottom-[35%] w-full flex justify-center text-white absolute z-1">
      <motion.h1
        className="text-6xl font-bold text-gray-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
       {name}
      </motion.h1>
    </div>
  );
};
export default CountryName;
