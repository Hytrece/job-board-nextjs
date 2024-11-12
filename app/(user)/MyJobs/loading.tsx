import { auth } from "@clerk/nextjs/server";
async function Loading() {
    const {userId} = auth().protect()
    return(
        <section className="w-full relative min-h-screen overflow-y-auto opacity-75">
           <div className="mt-40 absolute relative left-[10%]">
                    <h2 className="font-bold text-xl text-indigo-600">My Jobs</h2>
                    <div className="flex mt-6 items-center gap-x-7">
                        <h1 className="font-bold text-3xl">Saved Jobs</h1>
                    </div>
                
            </div>
    </section>
    )
}
export default Loading;