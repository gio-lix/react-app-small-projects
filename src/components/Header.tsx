import {FaBars} from "react-icons/fa"
import {BsArrowRight} from "react-icons/bs"
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import {useState} from "react";

const Header = () => {
    const [navMobileShow, setNavMobileShow] = useState<boolean>(false)
    return (
        <header
            data-aos="fade-down"
            data-aos-delay="1200"
            data-aos-duration="1000"
            className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-[120px]">
                        <a href="#" className='h2'>
                            <span className="tracking-widest  uppercase">logo</span>
                        </a>
                        <div className="hidden lg:flex">
                            <Nav/>
                        </div>
                    </div>

                    <div className={`${navMobileShow ? "max-h-52" : "max-h-0"} lg:hidden absolute top-24 bg-gradient-to-b from-[#F6FAFD] to-[#FFFFFF] bg-no-repeat w-full left-0 font-bold rounded transition-all overflow-hidden`}>
                        <NavMobile />
                    </div>

                    <button className="hidden lg:flex btn btn-quaternary flex items-center gap-x-[20px] group">
                        Request Demo <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white  transition"/>
                    </button>
                    <div onClick={() => setNavMobileShow(!navMobileShow)} className=" lg:hidden text-2xl text-primary cursor-pointer">
                        <FaBars/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;