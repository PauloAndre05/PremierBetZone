import { PiPencilSimpleThin } from "react-icons/pi"
import { Logo } from "../assets/images"
import { NavBar } from "./navBar"
import { TfiKey } from "react-icons/tfi"
import { CiSearch } from "react-icons/ci"
import { HiMenuAlt2 } from "react-icons/hi"
import { useState } from "react"
import { Modal } from "./modal"

export const HeaderMobile = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleClick = () => {
        setIsOpenModal(true)
    }

    return(
        <div className="bg-[#009A47] md:hidden w-fulll flex flex-col">
            <div className="border-b border-[#e0e0e083] py-1">
                <NavBar />
            </div>
            <div className="flex justify-between px-3">
                <div className="flex gap-3 items-center">
                    <div className="cursor-pointer">
                        <HiMenuAlt2  size={24} color="#FFF"/>
                    </div>
                    <div className="w-24">
                        <img src={Logo} alt="LogoPremierBet" />
                    </div>
                </div>
                <div className="flex gap-1">
                <button onClick={handleClick} className="flex flex-col gap-1 items-center p-3 bg-[#FAE100] text-[#000]">
                    <i className="text-black"><PiPencilSimpleThin size={18}/></i>
                </button>
                <button onClick={handleClick} className="flex flex-col gap-1 items-center p-3 text-white">
                    <i><TfiKey size={20} /></i>
                </button>
                <button onClick={handleClick} className="flex flex-col gap-1 items-center p-3 text-white">
                    <i><CiSearch size={20} /></i>
                    
                </button>
            </div>
            </div>
            <Modal 
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
            />
        </div>
    )
}