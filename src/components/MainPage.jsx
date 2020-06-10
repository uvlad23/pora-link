import React, {useRef} from 'react';
import { Fade } from 'react-awesome-reveal';
import {ANIM_DURATION_BASE as base} from 'constants/common'
import {BsArrowRight as ArrowRight} from 'react-icons/bs'
import Typist from 'react-typist';
import Footer from "./common/Footer";

const MainPage = ({toNextPage, toPage}) => {

    const arrowRef = useRef();
    const wrapper = useRef();
    let redirectTimeout;

    React.useEffect(() => {
        wrapper.current.firstElementChild.style.opacity = 100;
        arrowRef.current.firstElementChild.style.position = 'fixed';
        arrowRef.current.firstElementChild.style.opacity = 100;
        arrowRef.current.firstElementChild.style.left = arrowRef.current.offsetLeft;

        return () => {
            clearTimeout(redirectTimeout);
        }
    }, []);

    const onClickHandler = () => {
        const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
        wrapper.current.firstElementChild.style.opacity = 0;
        arrowRef.current.firstElementChild.style.left = width;
        redirectTimeout = setTimeout(() => {
            toNextPage();
        }, base * .5)
    };

    return (
        <div className='main-page__wrapper' ref={wrapper}>
            <div className="container">
                <div className="main-page__offer">
                    <h1 className="main-page__title" onClick={onClickHandler}>
                        Пора <span ref={arrowRef}><ArrowRight/></span><br/>
                        Напомнить
                    </h1>
                    <Typist cursor={{show: false}} avgTypingDelay={30}>
                        <p>
                            Найдите <b>минутку</b> <br/>
                            cоздать элегантное <b>сообщение</b>.
                        </p>
                    </Typist>
                </div>
            </div>
        </div>
    );
};

export default MainPage;