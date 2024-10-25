import { FC } from "react"
import { CardNeswsType } from "../types/types"

export const CardNews:FC<CardNeswsType> = ({ id, image, text, link }) => {
    return(
        
            <a href={link}  className="flex flex-col bg-white h-96 rounded overflow-hidden">
                <div className="w-full h-[12rem]">
                    <img src={image}  className={`w-full h-full object-cover ${id === 3 ? "object-top" : ""}`}/>
                </div>
                <span className="text-center font-semibold text-lg flex-grow p-5 ">{text}</span>
            </a>
    )
}