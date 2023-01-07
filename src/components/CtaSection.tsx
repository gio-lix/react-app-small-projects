import {ctaData} from "../helper/data";
import {BsArrowRight} from "react-icons/bs";


const CtaSection = () => {
    const {title,subTitle} = ctaData
    return (
        <section
            data-aos="fade-up"
            className="my-[75px] xl:my-[150px] border-t-2">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row justify-between items-center">
                    <div className="py-12 xl:py-24 text-center xl:text-left">
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="h2 mb-5"
                        >{title}</h2>
                        <p
                            data-aos="fade-up"
                            className="lead ">{subTitle}</p>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-y-4 gap-x-[30px] ">
                        <button
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="btn bg-green-300 text-white hover:bg-green-400 ">check more</button>
                        <button
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="btn btn-quaternary flex  items-center ga-x-[20px] group">
                            Lorem ipsum
                            <BsArrowRight  className="text-2xl group-hover:text-white transition"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;