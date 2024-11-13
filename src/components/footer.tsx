import { ButtonWhatsaap } from "./buttonWhatsaap";

import { Logo } from "../assets/images";

export const Footer = () => {
  return (
    <footer className="bg-[#454C4C] text-white h-56 flex flex-col gap-5 px-3 py-4">
      <div className="flex justify-between border-b pb-4">
        <a href="/" className="w-32">
          <img src={Logo} alt="LogoPremierBet" />
        </a>
        <div>
          <ButtonWhatsaap />
        </div>
      </div>

      <div className="text-white/60 text-center max-lg:text-sm">
        <p>
          Copyright &copy; 2024 Josias Paulo Leitão Ribeiro | Parceiro Oficial
          Premier Bet Angola
        </p>
        <span>Todos os direitos reservados</span>
      </div>
    </footer>
  );
};
