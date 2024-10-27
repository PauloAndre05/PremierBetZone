import { useState } from "react"
import { FaCopy } from "react-icons/fa"

export const Promocional = () => {

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
        <div className="my-14 flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl font-bold">Código Promocional</h1>
            <div className="flex items-baseline gap-2">
                <span className="text-2xl text-[#25D366] font-bold tracking-widest">AO157322</span>
                <div className="relative group">
                    <button className="group">
                        <FaCopy size={20} 
                         onClick={copyToClipboard}
                         onMouseLeave={refreshText}
                        />
                    </button>  
                    <span className="opacity-0 transform scale-95 bg-white p-1 rounded text-xs absolute left-6 top-0 whitespace-nowrap group-hover:opacity-100 group-hover:scale-100 group-hover:transition group-hover:duration-500 ease-in-out">{text}</span>
                </div>
            </div>
        </div>
    )
}