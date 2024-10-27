import { CardNews } from "./cardNews"
import { CardNewsInfo } from "../data/data" 
import { Swiper, SwiperSlide } from "swiper/react"

export const News = () => {
    return(
        <div className="max-w-screen-xl max-md:max-w-[95%] mx-auto">
            <style>{`
                .swiper-pagination-bullet-active {
                    background-color: #186F2E; /* Cor do bullet ativo */
                }
                
                .swiper-button-prev,
                .swiper-button-next {
                    color: #E37A00;
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
            <h1 className="text-2xl font-bold text-[#186F2E] mb-10 max-md:mt-10">Ajuda e Tutoriais</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                pagination={{ dynamicBullets: true, clickable:true }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    728: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    
                }}
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
