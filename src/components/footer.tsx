import { ButtonWhatsaap } from "./buttonWhatsaap";

import { Logo } from "../assets/images";

import {
  foot1,
  foot2,
  foot3,
  foot4,
  foot5,
  foot6,
  foot7,
  foot8,
  foot9,
} from "../assets/images/index";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import { menu } from "./navBar";

const image = [
  { id: 1, image: foot1 },
  { id: 2, image: foot2 },
  { id: 3, image: foot3 },
  { id: 4, image: foot4 },
  { id: 5, image: foot5 },
  { id: 6, image: foot6 },
  { id: 7, image: foot7 },
  { id: 8, image: foot8 },
  { id: 9, image: foot9 },
];

export const Footer = () => {
  return (
    <footer className="bg-[#454C4C] text-white flex flex-col gap-5 px-3 py-4">
      <div className="flex justify-between border-b border-white/50 pb-4 items-center">
        <a href="/" className="w-32">
          <img src={Logo} alt="LogoPremierBet" />
        </a>
        <div className="flex gap-4 items-center">
          <a href="#">
            <FaFacebookF color="#fff" size={24} />
          </a>
          <a href="#">
            <FaInstagram color="#fff" size={24} />
          </a>
          <a href="#">
            <RiTwitterXFill color="#fff" size={24} />
          </a>
          <a href="https://chat.whatsapp.com/I5E93ugUKHT0Gx7gFgfLPv">
            <FaWhatsapp color="#fff" size={24} />
          </a>
        </div>
      </div>
      <div className="flex justify-center gap-2 flex-wrap border-b border-white/50 pb-4">
        {image.map((item) => (
          <div
            key={item.id}
            className="w-[124px] h-[60px] rounded-md overflow-hidden max-lg:w-[62px] max-lg:h-[30px]"
          >
            <img src={item.image} className="w-full h-full" />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-36 border-b border-white/50 pb-4 flex-wrap max-md:flex-col max-md:items-center max-md:gap-2">
        <div className="max-md:text-center">
          <h2 className="font-bold">Links rápidos</h2>
          <div className="flex flex-col">
            {menu
              .filter((item) => item.id <= 4)
              .map((item) => (
                <span key={item.id} className="text-white/70 text-sm">
                  {item.name}
                </span>
              ))}
          </div>
        </div>
        <div className="max-md:text-center">
          <h2 className="font-bold">Contactos</h2>
          <div className="flex flex-col text-white/70 text-sm">
            <span> + 244 944 617 903</span>
            <span> + 244 932 926 678</span>
            <span>premierbet@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-col max-md:text-center">
          <h2 className="font-bold">Comunidade</h2>
          <span className="text-white/70 mb-2 text-sm">
            Junte-se à nossa comunidade de apostadores e aprenda a ganhar na
            Premierbet
          </span>
          <div className="self-start max-md:self-center">
            <ButtonWhatsaap />
          </div>
        </div>
      </div>

      <div className="text-white/60 text-center text-sm max-lg:text-xs">
        <p>
          Copyright &copy; 2024 Josias Paulo Leitão Ribeiro | Parceiro Oficial
          Premier Bet Angola
        </p>
        <span>Todos os direitos reservados</span>
      </div>
    </footer>
  );
};
