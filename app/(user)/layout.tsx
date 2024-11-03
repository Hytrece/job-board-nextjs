import SideBarDashBoard from "@/components/ui/sidebardashboard";
import { cn } from "@/lib/utils";
function UserLayout({children}:{children:React.ReactNode}){
    return(
        <div
          className={cn(
          "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1 w-screen h-screen mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
          "" 
          )}
      >
            <SideBarDashBoard/>
            {children}
        </div>
    )
}
export default UserLayout;