import React, {memo, useEffect, useState} from 'react';
import {useChart} from "../../utils/Chart";

import ReactApexChart from "react-apexcharts";
import user from "../../assets/data.json"

import s from "../../styles/components/Chat.module.scss"

const Chart = () => {
    const {chart} = useChart(user as any)
    const [chatWidth, setChatWidth] = useState<number>(window.innerWidth)



    const changeNavbar = () => {
        if (window.innerWidth > 600 ) {
            return setChatWidth(600)
        }
        setChatWidth(window.innerWidth - 70)
    };

    useEffect(() => {
        window.addEventListener('resize', changeNavbar);
        return () => window.removeEventListener('resize', changeNavbar);
    },[changeNavbar])

    useEffect(() => {
        changeNavbar()
    },[window.location])

    return (
       <div className={s.root}>
           <ReactApexChart
               options={chart.options}
               series={chart.series}
               type="bar"
               height={250}
               width={chatWidth}
           />
       </div>
    );
};

export default memo(Chart);