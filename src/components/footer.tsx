import { ButtonWhatsaap } from "./buttonWhatsaap"

export const Footer = () => {
    return(
        <footer className="bg-[#454C4C] text-white h-56 flex flex-col gap-5 justify-center items-center">
            <div>
                <ButtonWhatsaap />
            </div>
            <div className="text-white/60 text-center max-lg:text-sm">
                <p>Copyright &copy; 2024 Josias Paulo Leitão Ribeiro | Parceiro Oficial Premier Bet Angola</p>
                <span>Todos os direitos reservados</span>
            </div>
        </footer>
    )
}