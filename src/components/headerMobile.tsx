import { PiPencilSimpleThin } from "react-icons/pi"
import { Logo } from "../assets/images"
import { NavBar } from "./navBar"
import { TfiKey } from "react-icons/tfi"
import { CiSearch } from "react-icons/ci"

export const HeaderMobile = () => {
    return(
        <div className="bg-[#009A47] md:hidden w-fulll flex flex-col">
            <div className="border-b border-[#e0e0e083] py-1">
                <NavBar />
            </div>
            <div className="flex justify-between px-3">
                <div className="flex gap-4 items-center">
                    Menu
                    <div className="w-28">
                        <img src={Logo} alt="LogoPremierBet" />
                    </div>
                </div>
                <div className="flex gap-1">
                <a href="#" className="flex flex-col gap-1 items-center p-1 bg-[#FAE100] text-[#000]">
                    <i className="text-black"><PiPencilSimpleThin size={16}/></i>
                    <p className="text-black text-[10px]">Registar</p>
                </a>
                <a href="#" className="flex flex-col gap-1 items-center p-1 text-white">
                    <i><TfiKey size={16} /></i>
                    <p className="text-[10px]">Iniciar Sessão</p>
                </a>
                <a href="#" className="flex flex-col gap-1 items-center p-1 text-white">
                    <i><CiSearch size={16} /></i>
                    <p className="text-[10px]">Procurar</p>
                </a>
            </div>
            </div>
        </div>
    )
}