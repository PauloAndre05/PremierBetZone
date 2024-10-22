import { ButtonWhatsaap } from "./buttonWhatsaap"

import { fundoFooter } from "../assets/images/index"

export const Footer = () => {
    return(
        <footer className="relative text-white h-56 flex justify-center items-center">
            <img src={fundoFooter}   className="object-cover h-full w-full"/>
            <div className="inset-0 absolute backdrop-blur-lg bg-[#000000bd] flex flex-col items-center justify-between p-5">
               <div>
                    <ButtonWhatsaap />
               </div>
               <div className="text-white/60 text-center">
                <p>Copyright &copy; 2024 Josias Paulo Leitão Ribeiro | Parceiro Oficial Premier Bet Angola</p>
                <span>Todos os direitos reservados</span>
               </div>
            </div>
        </footer>
    )
}