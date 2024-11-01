import React from "react";
import { BentoGrid, } from "@/components/ui/bento-grid";
import { auth } from "@clerk/nextjs/server";
async function Loading(){
  const {userId} = auth().protect();
    if(!userId){
        return null;
    }
    const items = [
        1,2,3,4
      ];
  return (
    <section className="w-full relative min-h-screen overflow-y-auto opacity-75">
            <div className="mt-20 absolute relative left-[10%] ">
                <h1 className="font-bold text-3xl">Welcome Back!</h1>
                <BentoGrid className="absolute md:auto-rows-[20rem] w-[65%] mt-7">
                    {items.map((item, i) => (
                        <div key={i}>
                            <Skeleton/>
                        </div>
                    ))}
                </BentoGrid>
            </div>
    </section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

export default Loading;