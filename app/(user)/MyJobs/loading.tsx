import { auth } from "@clerk/nextjs/server";
import {LoaderCircle,Ellipsis } from "lucide-react";
async function Loading() {
    const {userId} = auth().protect()
    return(
        <section className="w-full relative bg-zinc-100 min-h-screen relative overflow-x-hidden overflow-y-auto opacity-75">
           <div className="mt-40 absolute relative left-[10%]">
                    <h2 className="font-bold text-xl text-indigo-600">My Jobs</h2>
                    <div className="flex mt-6 items-center gap-x-7">
                        <h1 className="font-bold text-3xl">Saved Jobs</h1>
                        <div className="bg-zinc-200 text-black font-bold text-3xl p-3 rounded-full"><Ellipsis className="animate-pulse"/></div>
                    </div>
                
            </div>
            <div className="mt-52 w-full h-full flex items-center justify-center "><LoaderCircle className="animate-spin w-20 h-20 text-bold text-indigo-600"/></div>
    </section>
    )
}
export default Loading;