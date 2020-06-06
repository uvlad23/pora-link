import React, {useRef, useEffect} from 'react';
import {Fade, JackInTheBox} from 'react-awesome-reveal';
import {ANIM_DURATION_BASE as base} from 'constants/common'

const Intro = ({toNextPage}) => {
    const wrapper = useRef();

    useEffect(() => {
        wrapper.current.style.backgroundColor = 'rgba(0, 0, 0, 0.33)';
        setTimeout(() => {
            wrapper.current.style.opacity = 100;
        }, 200)
    } ,[]);

    return (
        <div className='intro__wrapper' ref={wrapper}>
            <div className="container">
                <div className="intro__offer">
                    <Fade cascade duration={base * 1}>
                        <h2>Онлайн Заметка</h2>
                        <p>Ваше <b>сообщение</b> можно будет увидеть по <b>спец-ссылке</b></p>
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