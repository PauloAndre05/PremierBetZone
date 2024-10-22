import {
    comoCriarCobta,
    comoDepositar,
    quiz,
    tudoSobre
} from "../assets/images/index"


export const CardNews = () => {
    
    const CardNewsInfo = [
        {
            id: 1,
            image: comoCriarCobta,
            text:"Como criar uma conta na Premier Bet Angola?",
            link: "#"
        },

        {
            id: 2,
            image: comoDepositar,
            text:"Como depositar na Premier Bet pelo Multicaixa Express 2024 | Atualizado",
            link: "#"
        },

        {
            id: 3,
            image: quiz,
            text:"Ganhe até 20 Milhões de Kz respondendo 8 perguntas – Quiz for cash 2024",
            link: "#"
        },

        {
            id: 4,
            image: tudoSobre,
            text:"Saiba tudo sobre a Premier Bet Angola",
            link: "#"
        },
    ] 
     
    return(
        <div className="flex gap-3 flex-wrap justify-between">
            {CardNewsInfo.map(item => (
                <a href={item.link} key={item.id} className="flex flex-col bg-white w-80 h-80 rounded overflow-hidden">
                    <div className="w-full">
                        <img src={item.image}  className="w-full object-cover"/>
                    </div>
                    <span className="text-center font-semibold text-xl">{item.text}</span>
                </a>
            ))}
        </div>
    )
}