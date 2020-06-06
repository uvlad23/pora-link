import React, {useRef} from 'react';
import { Fade } from 'react-awesome-reveal';
import {ANIM_DURATION_BASE as base} from 'constants/common'
import {BsArrowRight as ArrowRight} from 'react-icons/bs'
import Typist from 'react-typist';

const MainPage = ({toNextPage}) => {

    const arrowRef = useRef();
    const wrapper = useRef();

    React.useEffect(() => {
        arrowRef.current.firstElementChild.style.position = 'fixed';
        arrowRef.current.firstElementChild.style.opacity = 100;
        arrowRef.current.firstElementChild.style.left = arrowRef.current.offsetLeft;

        setTimeout(() => {
            const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
            wrapper.current.firstElementChild.style.opacity = 0;
            arrowRef.current.firstElementChild.style.left = width;
        }, base * 2.5);
        setTimeout(() => {
            toNextPage();
        }, base * 3);
    }, []);

    return (
        <Fade duration={base * 2.5}>
            <div className='main-page__wrapper' ref={wrapper}>
                <div className="container">
                    <div className="main-page__offer">
                        <h1 className="main-page__title">
                            Пора <span ref={arrowRef}><ArrowRight/></span><br/>
                            Напомнить
                        </h1>
                        <Typist cursor={{show: false}} avgTypingDelay={15}>
                            <p>
                                Найдите <b>минутку</b> <br/>
                                Создать элегантное <b>сообщение</b>
                            </p>
                        </Typist>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default MainPage;