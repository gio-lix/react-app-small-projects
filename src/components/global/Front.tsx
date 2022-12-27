import React, {FC} from 'react';
import {Media} from "../../assets/images"

import s from "../../styles/components/Front.module.scss"

interface Props {
    scrollToSection: (t: string) => void
}

const Front: FC<Props> = ({scrollToSection}) => {
    return (
        <section className={s.root}>
            <div className={s.container}>
                <img src={Media.tree} alt="svg-image"/>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={Media.tree} alt="svg-image"/>
            </div>
            <button onClick={() => scrollToSection("home")}>
                Get Started
            </button>
        </section>
    );
};

export default Front;