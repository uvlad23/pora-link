import React, {useEffect, useRef} from 'react';
import Typist from 'react-typist';
import {ANIM_DURATION_BASE as base} from "constants/common";

const ReadMessage = ({addProps}) => {
    const nameWrapper = useRef();
    const messageWrapper = useRef();

    useEffect(() => {
        const timeout = setTimeout(() => {
            nameWrapper.current.style.fontSize = '48px';
            nameWrapper.current.style.paddingTop = '32px';
            nameWrapper.current.style.lineHeight = '0vh';
            messageWrapper.current.style.opacity = 100;
        }, base * 1.2);

        return () => clearTimeout(timeout)
    }, []);

    return (
        <div className='message__wrapper read-message'>
            <div className='floating-name__wrapper' ref={nameWrapper}>
                <span className='floating-name'>{addProps.toName},</span>
            </div>
            <div className="read-message__text" ref={messageWrapper}>
                <Typist cursor={{show: false}} avgTypingDelay={75}>
                    <p>{addProps.message}</p>
                    <Typist.Delay ms={100} />
                    <Typist cursor={{show: false}} avgTypingDelay={150}>
                        <h4>{addProps.fromName}.</h4>
                    </Typist>
                </Typist>
            </div>
        </div>
    )
};

export default ReadMessage