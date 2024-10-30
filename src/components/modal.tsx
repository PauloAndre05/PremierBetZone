import { FC, useState } from "react"    

import { Link } from "react-router-dom"

import { FaCopy } from "react-icons/fa"

interface ModalProps {
    isOpenModal: boolean,
    setIsOpenModal: (status: boolean) => void
}

export const Modal:FC<ModalProps> = ({ isOpenModal }) => {

    const [text, setText] = useState<string>("Copiar código")
    const textTocopy = "AO157322"

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textTocopy)
            setText("Copiado!")
            
        } catch (error) {
            console.error('Erro ao copiar: ', error)
        }

    }
    const refreshText = () => {
        setText("Copiar código")
    }

    return(
        <div className={`${ isOpenModal ? "flex w-full max-lg:w-[70%]" : "hidden" }`}>
            <div className="w-[30rem] max-lg:w-[90%] flex flex-col justify-center items-center text-2xl fixed p-5 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white text-black z-50 shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-3 opacity-60">Código Promocional</h1>
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl text-[#25D366] font-bold tracking-widest my-7">AO157322</span>
                    <div className="relative group">
                        <button className="group">
                            <FaCopy size={20} 
                                onClick={copyToClipboard}
                                onMouseLeave={refreshText}
                                opacity={.5}
                            />
                        </button>  
                        <span className="opacity-0 transform scale-95 bg-white p-1 rounded text-xs absolute left-6 top-0 whitespace-nowrap group-hover:opacity-100 group-hover:scale-100 group-hover:transition group-hover:duration-500 ease-in-out">{text}</span>
                    </div>
                </div>
                <div className="flex mt-3 justify-between gap-10">
                    <p className="text-sm">Utilize este código ao cadastrar-se na maior plataforma de apostas do país</p>
                    <Link to="https://www.premierbet.co.ao/bonus/register-exclusive-welcome-bonus?btag=691844_c09ba9bd59ff4d45885aeb846b623dc9&utm_medium" 
                        className="w-52 h-8 bg-[#E37A00] text-sm text-white self-end rounded-md flex justify-center items-center"
                    >
                        Avançar
                    </Link>
                </div>
            </div>

            <div className="absolute backdrop-blur-[3px] inset-0 z-30 bg-black/20" />
        </div>
    )
}