import {featureData} from "../helper/data";
import {BsArrowRight} from "react-icons/bs";

const Features = () => {
    const {title,subtitle,list} = featureData
    return (
        <section className="my-[70px] xl:my-[150px]">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2
                        className="h2 mb-6 xl:mb-12"
                        data-aos="fade-down"
                        data-aos-delay="100"
                    >{title}</h2>
                    <p
                        data-aos="fade-down"
                        data-aos-delay="200"
                        className="lead max--w-[585px] mx-auto mb-16 xl:mb-24"
                    >
                        {subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2" >
                    {list.map((ft, index) => (
                        <div
                            data-aos="zoom-in"
                            data-aos-offset="100"
                            data-aos-delay={ft.delay}
                            className="w-full relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto  max-w-[530px] h-[360px]" key={index}>
                            <div className="hidden -skew-x-1	 border border-sky-500 w-[500px] rounded-2xl h-[400px] xl:flex absolute top-0 right-0 -z-10"/>
                            <div
                                data-aos="zoom-in-right"
                                data-aos-delay={ft.delay}
                                className="max-w-[120px] xl:mr-7 xl:max-w-[230px]"
                            >
                                <img src={ft.image} alt=""/>
                            </div>
                            <div className="max-w-[220px]">
                                <h3 className="h3 mb-4">{ft.title}</h3>
                                <p className="font-light italic gap-x-2">{ft.description}</p>
                                <div className="flex items-center gap-x-2 group mt-2">
                                    <a className="text-primary font-bold" href="#">{ft.linkText}</a>
                                    <BsArrowRight className="text-xl text-center-primary group-hover:ml-[5px] transition-all"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;