"use client"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { CircleUserRound } from "lucide-react";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
  } from "@tabler/icons-react";
import { useState } from "react";
const SideBarDashBoard = () => {
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
    )
}
export default SideBarDashBoard;