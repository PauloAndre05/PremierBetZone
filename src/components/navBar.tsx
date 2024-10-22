import { IoMdAirplane } from "react-icons/io"
import { IoGiftOutline } from "react-icons/io5"
import { PiHouseLineLight, PiNumberSquareSix, PiPlayThin } from "react-icons/pi"
import { RiGroupLine, RiTimerFlashLine, RiVipFill } from "react-icons/ri"

export const NavBar = () => {

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

    return (
        <nav className="flex">
            <ul className="flex gap-3">
                {menu.map(item => (
                    <a href="#"
                        key={item.id}
                        className="flex gap-1 items-center text-white"
                    >
                        <i>{item.icon}</i>
                        <p className="text-sm">{item.name}</p>
                    </a>
                ))}
            </ul>
        </nav>
    )
}