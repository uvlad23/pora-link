import React from 'react';
import NavigationArrow from './common/NavigationArrow';
import { Fade } from 'react-awesome-reveal';
import {BsArrowRight as ArrowRight} from 'react-icons/bs'
import Typist from 'react-typist';

const MainPage = props => {
    return (
        <Fade duration={2000}>
            <div className='main-page__wrapper'>
                <div className="container">
                    <div className="main-page__offer">
                        <h1 className="main-page__title">
                            Пора<ArrowRight/><br/>
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