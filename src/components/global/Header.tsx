import React, {FC} from 'react';
import s from "../../styles/components/Header.module.scss"

interface Props {
    scrollToSection: (t: string) => void
}

const Header: FC<Props> = ({scrollToSection}) => {

    return (
        <>
            <header className={s.root}>
                <nav>
                    <ul>
                        <li>
                            <button onClick={() => scrollToSection("home")}>
                                HOME
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("feature")}>
                                Feature
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("chart")}>
                                Chart
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;