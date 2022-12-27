import React, {memo} from 'react';
import s from "../../styles/components/Feature.module.scss"

const Features = () => {
    return (
        <div className={s.root}>
            <div className={s.left_container}>
                <img src="https://www.reactsight.com/img/all-logo.png" alt="react"/>
            </div>
            <div className={s.right_container}>
                <h2>Features</h2>
                <article>
                    <i className="fa-solid fa-bolt"></i>
                    <div>
                        <h5>Lorem ipsum.</h5>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                    </div>
                </article>
                <article>
                    <i className="fa-solid fa-bacon"></i>
                    <div>
                        <h5>Lorem ipsum.</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repellat?
                        </p>
                    </div>
                </article>
                <article>
                    <i className="fa-solid fa-rocket"></i>
                    <div>
                        <h5>Lorem ipsum.</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur.
                        </p>
                    </div>
                </article>
                <article>
                    <i className="fa-solid fa-gauge"></i>
                    <div>
                        <h5>Lorem ipsum.</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default memo(Features);