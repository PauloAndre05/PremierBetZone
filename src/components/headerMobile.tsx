import { PiHouseLineLight, PiNumberSquareSix, PiPencilSimpleThin, PiPlayThin } from "react-icons/pi"
import { Logo } from "../assets/images"
import { NavBar } from "./navBar"
import { TfiKey } from "react-icons/tfi"
import { CiSearch } from "react-icons/ci"
import { HiMenuAlt2 } from "react-icons/hi"
import { useState } from "react"
import { Modal } from "./modal"
import { RiGroupLine, RiTimerFlashLine, RiVipFill } from "react-icons/ri"
import { IoMdAirplane } from "react-icons/io"
import { IoGiftOutline } from "react-icons/io5"

const menu = [
    { id: 1, icon: <PiHouseLineLight size={20} />, name: "Desporto" },
    { id: 2, icon: <RiTimerFlashLine size={20} />, name: "Ao Vivo" },
    { id: 3, icon: "", name: "Vegas" },
    { id: 4, icon: <IoMdAirplane size={20} />, name: "Aviator" },
    { id: 5, icon: <IoMdAirplane size={20} />, name: "Navigator" },
    { id: 6, icon: <PiPlayThin size={20} />, name: "Virtuais" },
    { id: 7, icon: <PiNumberSquareSix size={20} />, name: "Grátis" },
    { id: 8, icon: <IoGiftOutline size={20} />, name: "Promoções" },
    { id: 9, icon: "", name: "Torneiros" },
    { id: 10, icon: <RiVipFill size={20} />, name: "VIP" },
    { id: 11, icon: <RiGroupLine size={18}/>, name: "Contacte-nos" },
    { id: 12, icon: "", name: "App" },
    { id: 13, icon: "", name: "Zone" },
    { id: 14, icon: "", name: "Notícias" },

]

export const HeaderMobile = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false)

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
                    <div 
                        className="cursor-pointer"
                        onClick={ () => setIsOpenMenu(true) }
                    >
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
                {/* Menu Mobile */}

                <div className={`absolute w-full backdrop-blur-lg left-0 top-0  bg-[#000000be] z-50 ${isOpenMenu ? "" : "hidden"}`}>
                    <ul className="flex flex-col w-full">
                        {menu.map(item => (
                            <a href="https://www.premierbet.co.ao/bonus/register-exclusive-welcome-bonus?btag=691844_c09ba9bd59ff4d45885aeb846b623dc9&utm_medium"
                                key={item.id}
                                className="flex items-center text-white border-b py-3 px-3 border-[#e0e0e01f]"
                            >
                                <i className="max-md:hidden">{item.icon}</i>
                                <p className="text-sm textrigh text-[#cccccc]">{item.name}</p>
                            </a>
                        ))}
                    </ul>
                    <div 
                        className="absolute text-3xl text-white top-0 right-0 pr-3 font-light cursor-pointer"
                        onClick={ () => setIsOpenMenu(false) }
                    >
                        x
                    </div>
                </div> 
            </div>
            <Modal 
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
            />
        </div>
    )
}