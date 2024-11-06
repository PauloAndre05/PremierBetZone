import { SiWhatsapp } from "react-icons/si"

export const ButtonWhatsaap = () => {
    return(
        <a href="https://chat.whatsapp.com/I5E93ugUKHT0Gx7gFgfLPv" className="flex gap-2 items-center border-4 rounded-xl p-2 shadow-2xl animate-customPulse">
            <SiWhatsapp size={20} color="#25D366"/>
            <p className="max-lg:text-sm">Aderir ao grupo</p>
        </a>
    )
}