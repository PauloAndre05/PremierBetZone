import { CardNews } from "./cardNews"
import { CardNewsInfo } from "../data/data" 
import { Swiper, SwiperSlide } from "swiper/react"

export const News = () => {
    return(
        <div className="max-w-screen-xl mx-auto">
            <style>{`
                .swiper-pagination-bullet-active {
                    background-color: #186F2E; /* Cor do bullet ativo */
                }
                
                .swiper-button-prev,
                .swiper-button-next {
                    background-color: #f5f9f8;
                    
                    width: 25px;
                    height: 25px;
                    color: #E37A00;
                    border: 1px solid #f9fafb;
                    border-radius: 100%;
                    box-shadow: 0, 0, 20px rgb(92, 115, 160, .2);  

                    .swiper-button-prev::after {
                        font-size: 10px;
                    }

                    .swiper-button-next::after {
                        font-size: 10px;
                    }
                `}
            </style>
            <h1 className="text-2xl font-bold text-[#186F2E] mb-10">Ajuda e Tutoriais</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                pagination={{ dynamicBullets: true, clickable:true }}
            >
                {CardNewsInfo.map(item => (
                    <SwiperSlide>
                        <CardNews 
                            key={item.id}
                            image={item.image}
                            text={item.text}
                            link={item.link}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
