import {heroData} from "../helper/data";
import Header from "./Header";

const Hero = () => {
    const {subtitle,title,image} = heroData
    return (
       <section className="lg:h-[900px] py-12">
           <Header />
           <div className="container mx-auto h-full relative">
               <div className="flex flex-col xl:flex-row items-center  h-full md:py-24">
                   <div className="text-center xl:text-left xl:absolute">
                       <h1 className="h1  xl:max-w-[700px] mb-6 lg:mb-12"
                           data-aos="fade-down" data-aos-delay="400"
                       >{title}</h1>
                       <p className="xl:max-w-[380px] mb-6 lg:mb-12 "  data-aos="fade-down" data-aos-delay="500">{subtitle}</p>
                   </div>
                   <div className="xl:absolute xl:-right-12 xl:bottom-16" data-aos="fade-up" data-aos-delay="700">
                       <img src={image} alt=""/>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default Hero;