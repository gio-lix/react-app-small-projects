import React, {memo} from 'react';
import s from "../../styles/components/HomeSection.module.scss"

import {ArticleType} from "../../types/typing";


const params:ArticleType[] = [
    {
        id: 1,
        Icon:<i className="fa-solid fa-cubes"></i>,
        title: "Lorem ipsum",
        desc: "Lorem ipsum dolor sit amet.Aliquid culpa magni"
    },
    {
        id: 2,
        Icon:  <i className="fa-brands fa-chrome"></i>,
        title: "Lorem ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis, culpa debitis dolores expedita"
    },
    {
        id: 3,
        Icon: <i className="fa-solid fa-tv"></i>,
        title: "Lorem ipsum  dolor ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis, culpa debitis"
    },
    {
        id: 4,
        Icon: <i className="fa-sharp fa-solid fa-screwdriver-wrench"></i>,
        title: "Lorem ipsum dolor sit amet",
        desc: "quis reiciendis repellat reprehenderit saepe sint voluptates voluptatum. Animi."
    },
    {
        id: 5,
        Icon: <i className="fa-brands fa-square-github"></i>,
        title: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis, culpa debitis"
    }

]

const HomeSection = () => {
    return (
        <div className={s.root}>
            <h2>Getting starting</h2>
            <div className={s.container}>
                <div className={s.card_box}>
                    {params.map((art) => (
                        <article key={art.id}>
                            {art.Icon}
                            <div>
                                <h4>{art.title}</h4>
                                <p>{art.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
                <div className={s.img_box}>
                    <img src="https://www.reactsight.com/img/testingDEMO.gif" alt="gif"/>
                </div>
            </div>
        </div>
    );
};

export default memo(HomeSection);