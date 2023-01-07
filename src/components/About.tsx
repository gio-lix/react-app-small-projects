import {aboutData} from "../helper/data";

const About = () => {
    const {image, title,subtitle} = aboutData
    return (
      <section
          data-aos="fade-up"
          data-aos-offset="350"
          className="my-[30px] xl:mt-[100px]">
          <div className="container mx-auto ">
              <div className="min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left xl:gap-x-[60px] xl:pb-0">
                  <div
                      className="flex-1"
                      data-aos="zoom-in-left"
                  >
                      <img src={image} alt=""/>
                  </div>
                  <div className="flex-1 xl:pr-12">
                      <h2
                          className="h2 mb-10"
                          data-aos="fade-up"
                          data-aos-delay="300"
                      >{title}</h2>
                      <p className="max-w-[474px] mx-auto xl:mx-0">{subtitle}</p>
                  </div>
              </div>
          </div>
      </section>
    );
};

export default About;