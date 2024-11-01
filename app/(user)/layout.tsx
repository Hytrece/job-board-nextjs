"use client"
import React, { useState } from "react";
import { CircleUserRound } from "lucide-react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { Toaster } from "sonner";
import { connectToDB } from "@/lib/db";
const UserLayout = ({children}:{children:React.ReactNode}) => {
    
    const links = [
        {
        label: "Dashboard",
        href: "/dashboard",
        icon: (
            <IconBrandTabler className="text-neutral-200 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
        },
        {
        label: "Saved Jobs",
        href: "/dashboard/jobs",
        icon: (
            <IconUserBolt className="text-neutral-200 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
        },
        {
        label: "Settings",
        href: "#",
        icon: (
            <IconSettings className="text-neutral-200 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
        },
        {
        label: "Logout",
        href: "#",
        icon: (
            <IconArrowLeft className="text-neutral-200 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
        },
    ];
    const [open, setOpen] = useState(false);

    return(
        <div
            className={cn(
            "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1 w-screen h-screen mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
            "" // for your use case, use `h-screen` instead of `h-[60vh]`
            )}
        >
            <Sidebar open={open} setOpen={setOpen} animate={true}>
            <SidebarBody className="justify-between bg-indigo-500 gap-10">
                <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <>
                    VIKB.IO
                </>
                <div className="mt-8 flex flex-col gap-2">
                    {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link} />
                    ))}
                </div>
                </div>
                <div>
                <SidebarLink
                    link={{
                    label: "Manu Arora",
                    href: "#",
                    icon: (
                        <CircleUserRound/>
                    ),
                    }}
                />
                </div>
            </SidebarBody>
            </Sidebar>
            {children}
            <Toaster />
        </div>
        );
        }
export default UserLayout;