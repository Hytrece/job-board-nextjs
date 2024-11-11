import { auth } from "@clerk/nextjs/server";
async function Loading() {
    const {userId} = auth().protect()
    return(
        <section className="w-full relative min-h-screen overflow-y-auto opacity-75">
            <div className="mt-36 absolute relative left-[10%]">
                <div className="flex items-center gap-x-7">
                    <h1 className="font-bold text-3xl">Saved Jobs</h1>
                </div>
                
            </div>
    </section>
    )
}
export default Loading;