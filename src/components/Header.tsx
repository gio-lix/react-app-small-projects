import React, {useState} from 'react';
import {Link} from "react-router-dom";
import format from "date-fns/format";
import CL from "date-fns/locale/en-US";
import s from "../styles/components/Header.module.scss"
const Header = () => {
    const [show, setShow] = useState(false)
    const currentDate = format(new Date(), "EEEEEE, d MMMM", {
        locale: CL,
    });
    return (
        <header className={`${s.headerContainer} ${show ? s.open_header : null}`}>
            <i onClick={() => setShow(!show)} className="material-icons">
                drag_indicator
            </i>
           <div className={s.headerInfo}>
               <div>
                   <Link to="/">
                       <img src="/icons8-music-50.svg" alt="Podcast" />
                   </Link>
                   <p>The best for you to hear, always</p>
                   <p>
                       By <a target="_blank" href="https://github.com/gio-lix">GM </a>
                   </p>
                   <span>{currentDate}</span>
               </div>
           </div>
        </header>
    );
};

export default Header;