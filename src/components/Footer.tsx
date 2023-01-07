import {footerDta} from "../helper/data";

const Footer = () => {
    const {list, list2, socialList, logo, phone, email, address} = footerDta
    return (
        <footer data-aos="fade-up">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12">
                    <div className="w-[45%] mx-auto flex flex-col items-center xl:items-start ">
                        <a href="#" className="text-3xl">
                            {logo}
                        </a>
                        <address className="mx-w-[260px] mb-5 text-primary font-bold">
                            {address}
                        </address>
                        <div className="font-light italic">
                            {email}
                        </div>
                        <div className="font-light italic">
                            {phone}
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between">
                        <div >
                            <div className="font-extrabold text-primary mb-8">
                                About
                            </div>
                            <ul className="flex flex-col gap-y-4">
                                {list.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-primary" href={item.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div>
                            <div className="font-extrabold text-primary mb-8">Help</div>
                            <ul  className="flex flex-col gap-y-4">
                                {list2.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-primary" href={item.href}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="font-extrabold text-primary mb-8 ">Social Media</div>
                            <ul className="flex gap-y-4 gap-x-4 justify-center">
                                {socialList.map((item, index) => (
                                    <li key={index} className="w-12 h-12 bg-primary flex bg-indigo-100 justify-center items-center rounded-full cursor-pointer
                                        hover:bg-indigo-200 transition
                                    ">
                                        <a className="text-white text-xl hover:text-white" href={item.href}>
                                            <item.Icon />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;