import { CardNews } from "./cardNews"
import { CardNewsInfo } from "../data/data" 
import { Swiper, SwiperSlide } from "swiper/react"

export const News = () => {
    return(
        <div className="max-w-screen-xl max-lg:max-w-[90%] mx-auto overflow-hidden">
            <style>{`
                .swiper-pagination-bullet-active {
                    background-color: #E37A00;
                }

                @media (max-width: 640px) {
        .swiper-button-prev,
        .swiper-button-next {
            display: none; /* Esconde as setas de navegação no mobile */
        }
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
            <h1 className="text-2xl max-lg:text-xl font-bold text-[#186F2E] mb-10 max-lg:my-5 text-center">Ajuda e Tutoriais</h1>
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
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    
                }}
            >
                {CardNewsInfo.map(item => (
                    <SwiperSlide key={item.id}>
                        <CardNews 
                            id={item.id}
                            image={item.image}
                            title={item.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
