"use client"

import { Switch } from "./ui/switch"

const ToKorean = () => {
    return (
        <div className="rounded-full w-max p-2 bg-white flex gap-x-5 items-center">
            <h1 className="font-semibold">Translate to Korean</h1>
            <Switch/>
        </div> 
    )
}
export default ToKorean;