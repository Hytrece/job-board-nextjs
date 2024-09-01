import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
interface Param{
  industry?:string | "none",
  s?: string | "",
  page?:string | "1",
  type?:string,
};

export function checkNullandCall(param:Param){
  let returnObject = new Map()
  if(param.industry!="none" || param.industry==undefined){
    returnObject.set("category",param.industry);
  }
  if(param.s!="" || param.s==undefined){
    returnObject.set("q" ,param.s);
  }
  if(param.page!="1" || param.page==undefined){
    returnObject.set("page",param.page);
  }
  if(param.type!="" || param.type==undefined){
    returnObject.set("type",param.type);
  }
  return new URLSearchParams(Object.fromEntries(returnObject));
}