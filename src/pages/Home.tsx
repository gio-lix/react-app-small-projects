import React, {useCallback, useRef, useState} from 'react';

import HomeSection from "../components/sections/HomeSection";
import Features from "../components/sections/Features";
import Header from "../components/global/Header";
import Front from "../components/global/Front";
import Chart from "../components/sections/Chart";


const Home = () => {
    const ref = useRef<HTMLDivElement | any>()
    const [activePage, setActivePage] = useState("home")


    const scrollToSection = useCallback((element: string) => {
        [...ref.current?.children].forEach((ele) => {
            setActivePage(element)
            if (ele.id === element) {
                window.scrollTo({
                    top: ele.offsetTop - 140,
                    behavior: "smooth"
                })
            }
        })
    },[activePage])




    return (
        <>
            <Front scrollToSection={scrollToSection}/>
            <Header scrollToSection={scrollToSection}/>
           <div ref={ref} style={{background:"#cde3ad"}}>
               <section id="home" className="main-box">
                   <HomeSection />
               </section>
               <section id="feature" >
                   <Features />
               </section>
               <section id="chart">
                   <Chart />
               </section>
           </div>
        </>

    );
};

export default Home;