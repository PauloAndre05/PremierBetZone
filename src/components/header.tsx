import { PiPencilSimpleThin } from "react-icons/pi"
import { Logo } from "../assets/images/index"
import { NavBar } from "./navBar"
import { TfiKey } from "react-icons/tfi"
import { CiSearch } from "react-icons/ci"

export const Header = () => {
    return(
        <div className="flex justify-between items-center p-3 bg-[#009A47]">
            <div className="w-28">
                <img src={Logo} alt="LogoPremierBet" />
            </div>
            <NavBar />
            <div className="flex gap-1 jus">
                <a href="#" className="flex gap-1 items-center p-2 bg-[#FAE100] text-[#000]">
                    <i className="text-black"><PiPencilSimpleThin size={20}/></i>
                    <p className="text-black">Registar</p>
                </a>
                <a href="#" className="flex gap-1 items-center p-2 text-white">
                    <i><TfiKey size={20} /></i>
                    <p>Iniciar Sessão</p>
                </a>
                <a href="#" className="flex gap-1 items-center p-2 text-white">
                    <i><CiSearch size={20} /></i>
                    <p>Procurar</p>
                </a>
                
            </div>
        </div>
    )
}