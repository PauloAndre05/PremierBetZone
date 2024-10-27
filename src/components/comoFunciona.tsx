import { comoFunciona } from "../assets/images"

export const ComoFunciona = () => {

    const passos = [
        {
            title: "Código promocional",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
            title: "Cadastro",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      
        },
        {
            title: "Grupo",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
    ]

    

    return (
        <div className="max-w-screen-xl mx-auto py-20 max-md:py-10 max-md:w-[95%]">
            <div className="w-full flex md:gap-6 max-md:flex-col">
                <div className="w-48 max-md:hidden flex flex-col justify-center items-center mt-[10px]">
                    <span className="text-[#ffff] text-[30px] font-bold bg-[#E37A00] w-[50px] h-[50px] flex justify-center items-center rounded-full">
                        1
                    </span>

                    <span
                        className="w-[5px] h-[75px] bg-[#E37A00] mt-2 mb-2"
                    />

                    <span className="text-[#ffff] text-[30px] font-bold bg-[#E37A00] w-[50px] h-[50px] flex justify-center items-center rounded-full">
                        2
                    </span>

                    <span
                        className="w-[5px] h-[75px] bg-[#E37A00] mt-2 mb-2"
                    />

                    <span className="text-[#ffff] text-[30px] font-bold bg-[#E37A00] w-[50px] h-[50px] flex justify-center items-center rounded-full">
                        3
                    </span>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-bold text-[16px] text-[#00000080] font-[Montserrat] max-md:hidden">
                            COMO FUNCIONA
                        </h3>

                        <h1 className="font-bold text-[30px] text-[#E37A00] flex items-center gap-2 max-md:w-full">
                            Registar-se na PremierBet
                        </h1>
                    </div>

                    {passos.map((passo, index) => (
                        <div
                            className="bg-[#FFF] border-none p-6 rounded-xl"
                            key={index}
                        >
                            <h3 className="text-[.9rem] font-semibold">{passo.title}</h3>
                            <p className="text-[.83rem] text-slate-500 font-medium">
                                {passo.description}
                            </p>
                        </div>
                    ))}

                    <a 
                        href="https://www.premierbet.co.ao/bonus/register-exclusive-welcome-bonus?btag=691844_c09ba9bd59ff4d45885aeb846b623dc9&utm_medium"
                        className="bg-[#E37A00] rounded-full w-[150px] h-[40px] py-[10px] px-[18px] box-border text-[white] text-center font-semibold text-xs hover:bg-transparent hover:text-[#E37A00] hover:border-[0.01rem] hover:border-[#E37A00] shadow-md"
                    >
                        Registar-se
                    </a>
                </div>
                    
                <div className="flex h-[550px] justify-center items-center w-[50%] rounded-lg overflow-hidden shadow-md max-md:self-end max-md:h-[250px] max-md:w-[35%]">
                    <img src={comoFunciona} alt="" className="object-cover h-full w-full" />
                </div>
            </div>
        </div>
    )
}