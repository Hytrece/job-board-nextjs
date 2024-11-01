import { connectToDB } from "@/lib/db";
import User from "@/lib/models/user.model";
import { MidTypePopulate } from "@/lib/types/jobtype";
import { auth } from "@clerk/nextjs/server";
import { formatDate,cn } from "@/lib/utils";
import { Loader,MousePointer2,Speech,PartyPopper } from 'lucide-react';
import Image from "next/image"
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Country from "@/lib/models/country-schema";
import { BreadcrumbDemo } from "@/components/breadcrumbs";
import { Search,X} from 'lucide-react';
import DeleteJobButton from "@/components/deletejob";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import ArrowButton from "@/components/arrowbutton";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
const status = [
    {
        index:0,
        status:"not applied",
        class:"bg-amber-100 text-amber-600",
        icon:<Loader/>
    },
    {
        index:1,
        status:"applied",
        class:"bg-indigo-100 text-indigo-600",
        icon:<MousePointer2/>
    },
    {
        index:2,
        status:"interviewed",
        class:"bg-orange-100 text-orange-600",
        icon:<Speech/>
    },
    {
        index:3,
        status:"accepted",
        class:"bg-green-100 text-green-600",
        icon:<PartyPopper/>
    },
]
async function Loading() {
    const {userId} = auth().protect()
    return(
        <section className="w-full relative min-h-screen overflow-y-auto opacity-75">
            <div className="mt-16 absolute relative left-[10%]">
                <BreadcrumbDemo prev={[{href:"/dashboard",name:"Dashboard"}]} now={{href:"/dashboard/jobs",name:"Saved Jobs"}} classname="mb-6"/>
                <div className="flex items-center gap-x-7">
                    <h1 className="font-bold text-3xl">Saved Jobs</h1>
                </div>
                
            </div>
    </section>
    )
}
export default Loading;