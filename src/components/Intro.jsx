import React, {useRef, useEffect} from 'react';
import {Fade} from 'react-awesome-reveal';
import {ANIM_DURATION_BASE as base} from 'constants/common'
import Footer from "./common/Footer";

const Intro = ({toNextPage, toPage}) => {
    const wrapper = useRef();

    useEffect(() => {
        const timeout = setTimeout(() => {
            wrapper.current.style.opacity = 100;
        }, 200)
        return () => clearTimeout(timeout);
    } ,[]);

    return (
        <div className='intro__wrapper' ref={wrapper}>
            <div className="container">
                <div className="intro__offer">
                    <Fade cascade duration={base * 1}>
                        <h2>Онлайн Заметка</h2>
                        <p>Ваше <b>сообщение</b> можно будет увидеть по <b>специальной ссылке</b></p>
                        <button className='btn' onClick={() => {
                            wrapper.current.style.opacity = 0;
                            setTimeout(() => {
                                toNextPage();
                            }, 500)
                        }}>Начать</button>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Intro;