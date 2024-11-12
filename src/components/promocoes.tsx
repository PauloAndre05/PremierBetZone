import { MdArrowBackIos } from "react-icons/md";
import { useParams } from "react-router-dom";

import { CardNewsInfo } from "../data/data";
import { Modal } from "./modal";
import { useState } from "react";

export const Promocoes = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { id } = useParams<{ id: string }>();
  const promocao = id
    ? CardNewsInfo.find((promocao) => promocao.id === parseInt(id))
    : null;

  console.log(promocao);

  return (
    <>
      {promocao ? (
        <div className="p-3 h-full">
          <div className="flex items-center">
            <a href="/" className="text-blue-500 flex items-center text-sm">
              <MdArrowBackIos size={12} color="#000" /> início
            </a>
            <p className="text-sm">/promoções</p>
          </div>
          <div className="w-full lg:h-[22rem] object-cover max-lg:">
            <img
              src={promocao.image}
              alt="bg"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-center text-xl font-bold my-2">
            {promocao.title}
          </h1>
          <button
            onClick={() => setIsOpenModal(true)}
            className="bg-[#FAE100] w-full h-[40px] py-[10px] px-[18px] box-border font-bold text-center text-xs shadow-md uppercase opacity-60 hover:opacity-100"
          >
            Regista já
          </button>
          <div className="grid lg:grid-cols-3 mt-16 mb-8 lg:gap-3 max-lg:grid-rows-3 gap-16">
            <div className="border border-[#009A47] relative flex flex-col items-center gap-4 h-24 rounded-md">
                <span className="absolute -top-[35%] bg-[#009A47] rounded-full w-16 h-16 flex justify-center items-center text-white font-bold text-xl">1</span>
                <p className="mt-12 text-[#009A47] font-bold">Faz um depósito</p>
            </div>
            <div className="border border-[#009A47] relative flex flex-col items-center gap-4 h-24 rounded-md">
                <span className="absolute -top-[35%] bg-[#009A47] rounded-full w-16 h-16 flex justify-center items-center text-white font-bold text-xl">1</span>
                <p className="mt-12 text-[#009A47] font-bold">Faz um depósito</p>
            </div>
            <div className="border border-[#009A47] relative flex flex-col items-center gap-4 h-24 rounded-md">
                <span className="absolute -top-[35%] bg-[#009A47] rounded-full w-16 h-16 flex justify-center items-center text-white font-bold text-xl">1</span>
                <p className="mt-12 text-[#009A47] font-bold">Faz um depósito</p>
            </div>
          </div>
          <div className="flex gap-2 border-b pb-3">
            <span className="p-1 text-sm font-semibold bg-[#009A47] text-white/90 ">Detalhes da Promoção</span>
            <span className="p-1 text-sm bg-[#EBF7F0]">Termos & Condições</span>
          </div>
          <div>
            <div className="flex flex-col gap-3 text-sm font-normal my-3">
              <p>Inicia a tua jornada de apostas desportivas com um incrível bónus de 200% no teu primeiro depósito como Bónus de Desporto, até um incrível montante de 50.000 Kz!</p>
              <p>Regista uma conta na Premier Bet, faz o teu primeiro depósito e triplica instantaneamente o teu dinheiro! Além disso, se depositares ao menos 2.400 Kz, podes aproveitar Apostas Grátis durante os primeiros 5 dias e mais 50 Rodadas Grátis no Jogo Brilliant Gems!  </p>
              <p>Exemplo: Depósito de 1.000 Kz, Obtém um Bónus Desportivo de 2.000 Kz. Saldo total: 3.000 Kz.</p>
              <p>Além disso, acede à tua conta diariamente nos primeiros cinco dias após registar-se para ganhar uma Aposta Grátis de 240 Kz por dia nos primeiros cinco dias! </p>
            </div>
            <div>
                <div>
                    <h1 className="text-sm font-bold">Como fazer um Depósito</h1>
                    <ul className="ml-3 my-2">
                        <li>Vai para a Página de Depósitos</li>
                        <li>Seleciona o Bónus de Boas-vindas de Desporto de 200%</li>
                        <li>Deposita e obtém o teu Bónus!</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-sm font-bold">Como fazer um Depósito</h1>
                    <ul className="ml-3 my-2">
                        <li>Vai para a Página de Depósitos</li>
                        <li>Seleciona o Bónus de Boas-vindas de Desporto de 200%</li>
                        <li>Deposita e obtém o teu Bónus!</li>
                    </ul>
                </div>
            </div>
          </div>
          <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
        </div>

      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};
