import React, {useEffect, useRef} from 'react';
import Typist from 'react-typist';
import {ANIM_DURATION_BASE as base} from "constants/common";
import NavigationArrow from "../common/NavigationArrow";

const ReadMessage = ({addProps, toPage}) => {
    const nameWrapper = useRef();
    const messageWrapper = useRef();
    const revert = useRef();

    useEffect(() => {
        const timeout = setTimeout(() => {
            nameWrapper.current.style.fontSize = '48px';
            nameWrapper.current.style.paddingTop = '32px';
            nameWrapper.current.style.lineHeight = '0vh';
            messageWrapper.current.style.opacity = 100;
        }, base * 1.5);

        const revertTimeout = setTimeout(() => {
            revert.current.style.opacity = 100;
        }, base * 5);

        return () => {
            clearTimeout(timeout);
            clearTimeout(revertTimeout);
        }
    }, []);

    const revertHandler = () => {
        toPage(2);
    };

    return (
        <div className='message__wrapper read-message'>
            <div className="revert-block" ref={revert}>
                <NavigationArrow direction='left' action={revertHandler} text={"Новое Сообщение"}/>
            </div>
            <div className='floating-name__wrapper' ref={nameWrapper}>
                <span className='floating-name'>{addProps.toName},</span>
            </div>
            <div className="read-message__text" ref={messageWrapper}>
                <Typist cursor={{show: false}} avgTypingDelay={100}>
                    <Typist.Delay ms={1000} />
                    <p>{addProps.message}</p>
                </Typist>
                <Typist cursor={{show: false}} avgTypingDelay={150}>
                    <Typist.Delay ms={4000} />
                    <h4>{addProps.fromName}.</h4>
                </Typist>
            </div>
        </div>
    )
};

export default ReadMessage