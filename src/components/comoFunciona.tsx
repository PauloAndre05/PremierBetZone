import { useState } from "react";
import { comoFunciona } from "../assets/images";
import { Modal } from "./modal";

export const ComoFunciona = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const passos = [
    {
      id: 1,
      title: "Código promocional",
      description:
        "Na página de registro, lembre-se de inserir nosso código promocional para aproveitar os benefícios exclusivos. O código não será preenchido automaticamente, então digite-o no campo designado",
    },
    {
      id: 2,
      title: "Cadastro",
      description:
        "Preencha todos os campos obrigatórios com suas informações pessoais, incluindo nome, e-mail, número de telefone e senha. Certifique-se de usar dados válidos para facilitar o acesso à conta",
    },
    {
      id: 3,
      title: "Grupo",
      description:
        "Depois de concluir o registro, você poderá fazer parte do nosso grupo exclusivamente no WhatsApp! Lá, compartilharemos dicas, estratégias e as últimas novidades para aproveitar ao máximo suas oportunidades",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-20 max-md:py-10 max-md:w-[90%]">
      <div className="w-full flex md:gap-6 max-md:flex-col">
        <div className="w-48 max-md:hidden flex flex-col justify-center items-center mt-12">
          <span className="text-[#ffff] text-[30px] font-bold bg-[#E37A00] w-[50px] h-[50px] flex justify-center items-center rounded-full">
            1
          </span>

          <span className="w-[5px] h-[65px] bg-[#E37A00] mt-2 mb-2" />

          <span className="text-[#ffff] text-[30px] font-bold bg-[#E37A00] w-[50px] h-[50px] flex justify-center items-center rounded-full">
            2
          </span>

          <span className="w-[5px] h-[65px] bg-[#E37A00] mt-2 mb-2" />

          <span className="text-[#ffff] text-[30px] font-bold bg-[#E37A00] w-[50px] h-[50px] flex justify-center items-center rounded-full">
            3
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-bold text-[16px] text-[#00000080] max-md:hidden">
              COMO FUNCIONA
            </h3>

            <h1 className="font-bold text-[30px] text-[#E37A00] flex items-center gap-2 max-lg:w-full max-lg:text-xl">
              Registar-se na PremierBet
            </h1>
          </div>

          {passos.map((passo) => (
            <div className="bg-[#FFF] border-none p-6 rounded-xl relative flex flex-col max-lg:mt-3" key={passo.id}>
              <h3 className="text-[.9rem] font-semibold">{passo.title}</h3>
              <p className="text-sm max-lg:text-[.83rem] text-slate-500 font-medium">
                {passo.description}
              </p>
              <div className="lg:hidden inset-0 absolute flex justify-center">
                <span className="absolute self-center -top-[1rem] text-[#ffff] text- font-bold bg-[#E37A00] w-9 h-9 flex justify-center items-center rounded-full ">
                  {passo.id}
                </span>
              </div>
            </div>
          ))}

          <button
            onClick={() => setIsOpenModal(true)}
            className="bg-[#E37A00] rounded-full w-[150px] h-[40px] max-lg:w-full py-[10px] px-[18px] box-border text-[white] text-center font-semibold text-xs hover:bg-transparent hover:text-[#E37A00] hover:border-[0.01rem] hover:border-[#E37A00] shadow-md"
          >
            Registar-se
          </button>
        </div>

        <div className="flex justify-center items-center w-[50%] rounded-lg overflow-hidden shadow-md max-md:self-end max-md:h-[250px] max-md:w-[35%] max-lg:hidden">
          <img
            src={comoFunciona}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  );
};
