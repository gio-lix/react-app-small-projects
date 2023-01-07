import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "../styles/slider.css"

import {Pagination} from "swiper"
import {testimonialsData} from "../helper/data";
const TestimonialsSlider = () => {

    return (
        <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{clickable: true}}
            modules={[Pagination]}
            className="mySwiper h-[400px] "
        >
            {testimonialsData.map((slide, index) => (
                <SwiperSlide key={index} className="bg-white  shadow-lg shadow-gray-500/40 border border-indigo-200
                rounded-xl border-accent-primary xl:max-w-[624px] max-h-[350px] pt-[60px] md:px-[35px]
                  xl:px-[70px] pb-[50px] flex flex-col items-center md:flex-row md:items-start  gap-x-[30px] shadow-xl                              ">
                    <img className="w-28 h-16 object-cover	 rounded-full" src={slide.image} alt=""/>
                    <div>
                        <div className="text-lg text-primary font-bold">{slide.name}</div>
                        <div className="mb-4 font-semibold text-accent-primary">{slide.web}</div>
                        <p className="max-w-[240px]">{slide.message}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TestimonialsSlider;