import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
interface Param{
  country:string
  industry?:string | "none",
  s?: string | "",
  page?:string | "1",
  type?:string,
};

export function checkNullandCall(param:Param){
  let returnObject = new Map()
  returnObject.set("country",param.country);
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
export function formatDate(input: string): string {
  // Create a Date object from the input string
  const date = new Date(input);

  // Define options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short'
  };

  // Format the date using the options
  const formattedDate = date.toLocaleDateString('en-GB', options); // 'en-GB' gives "01 Aug", 'en-US' would give "Aug 01"

  return formattedDate;
}