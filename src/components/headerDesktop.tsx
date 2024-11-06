import { PiPencilSimpleThin } from "react-icons/pi"
import { Logo } from "../assets/images/index"
import { NavBar } from "./navBar"
import { TfiKey } from "react-icons/tfi"
import { CiSearch } from "react-icons/ci"
import { Modal } from "./modal"
import { useState } from "react"

export const HeaderDesktop = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleClick = () => {
        setIsOpenModal(true)
    }

    return(
        <div className="relative h-16 max-lg:hidden">
            <div className="flex justify-between items-center p-3 bg-[#009A47]  fixed w-full z-40">
                <a href="/" className="w-28">
                    <img src={Logo} alt="LogoPremierBet" />
                </a>
                <NavBar />
                <div className="flex gap-1">
                    <button onClick={handleClick} className="flex gap-1 items-center p-2 bg-[#FAE100] text-[#000]">
                        <i className="text-black"><PiPencilSimpleThin size={20}/></i>
                        <p className="text-black text-nowrap">Registar</p>
                    </button>
                    <button onClick={handleClick} className="flex gap-1 items-center p-2 text-white">
                        <i><TfiKey size={20} /></i>
                        <p className="text-nowrap">Iniciar Sessão</p>
                    </button>
                    <button onClick={handleClick} className="flex gap-1 items-center p-2 text-white">
                        <i><CiSearch size={20} /></i>
                        <p className="text-nowrap">Procurar</p>
                    </button>
                </div>
                <Modal 
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                />
        </div>
        </div>
    )
}