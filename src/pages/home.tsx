import { Banner } from "../components/banner"
import { HeaderDesktop } from "../components/headerDesktop"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"

import { 
    centralBanner1,
    centralBanner2,
    centralBanner3,
 } from "../assets/images/index"
import { News } from "../components/news";
import { Footer } from "../components/footer";
import { Promocional } from "../components/promocional";
import { ComoFunciona } from "../components/comoFunciona";
import { HeaderMobile } from "../components/headerMobile";
import { Colaboradores } from "../components/colaboradores";

export const Home = () => {

    const sliderImages = [
        {id: 1, image: centralBanner1},
        {id: 2, image: centralBanner2},
        {id: 3, image: centralBanner3},
    ]

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };


    return(
        <div>
            <HeaderDesktop />
            <HeaderMobile />
            <Banner />
            <div className="md:my-10 max-w-screen-lg mx-auto">
                <Slider {...settings}>
                    {sliderImages.map(item => (
                        <img key={item.id} src={item.image} alt="ImageSlider" />
                    ))}
                </Slider>
            </div>
            <News />
            <ComoFunciona />
            <Colaboradores />
            <Promocional />
            <Footer />
        </div>
    )
}