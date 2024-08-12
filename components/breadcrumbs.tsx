"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { ChevronRight } from 'lucide-react';

  interface Props{
    prev:Page[],
    now:Page
  }
  interface Page{
    href:string,
    name:string,
  }
  export const BreadcrumbDemo = ({prev,now}:Props) => {
    return (
      <Breadcrumb className="mt-20 pt-7 ml-10">
        <BreadcrumbList className="flex gap-x-6 items-center">
          {prev.map((element)=>(
            <div key={element.name} className="flex gap-x-2 items-center">
            <BreadcrumbItem>
            <BreadcrumbLink className="text-lg font-bold" href={element.href}>{element.name}</BreadcrumbLink>
            </BreadcrumbItem>
            <ChevronRight className="w-5 h-5"/>
            </div>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage className="text-lg font-bold text-indigo-600">{now.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  }