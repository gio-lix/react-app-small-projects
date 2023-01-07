import TestimonialsSlider from "./TestimonialsSlider";

const Testimonials = () => {
    return (
        <section>
            <div className="container-fluid mx-auto">
                <div
                    data-aos="fade-up"
                    data-aos-offset="300"
                    className=" min-h-[600px] ">
                    <div className="flex flex-col justify-center px-2 xl:px-0 h-[800px] ">
                        <TestimonialsSlider />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;