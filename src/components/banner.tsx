import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"

import { 
    principalBanner1,
    principalBanner2,
    principalBanner3,
    principalBanner4
 } from "../assets/images/index"

export const Banner = () => {

    const sliderImages = [
        {id: 1, image: principalBanner1},
        {id: 2, image: principalBanner2},
        {id: 3, image: principalBanner3},
        {id: 4, image: principalBanner4},
    ]

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return(
        <div className="max-w-screen-xl mx-auto"> 
            <div className="">
                <Slider {...settings}>
                    {sliderImages.map(item => (
                        <img key={item.id} src={item.image} alt="ImageSlider" className="object-cover w-full" />
                    ))}
                </Slider>
            </div>
        </div>
    )
}