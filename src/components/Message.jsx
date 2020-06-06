import React, {useEffect, useState, useRef} from 'react';
import {Fade} from "react-awesome-reveal";
import {ANIM_DURATION_BASE as base} from "constants/common";
import NavigationArrow from "./common/NavigationArrow";
import capitalize from 'lodash.capitalize'

const Message = ({toNextPage, nextPage, toName, toPrevPage, prevPage, message, setMessage}) => {
    const
        nameWrapper = useRef(),
        messageTextEl = useRef(),
        wrapper = useRef();

    useEffect(() => {
        const nameTimeout = setTimeout(() => {
            nameWrapper.current.style.fontSize = '48px';
            nameWrapper.current.style.paddingTop = '32px';
            nameWrapper.current.style.lineHeight = '0vh';
        }, base * 1.2);

        setTimeout(() => {
            wrapper.current.style.opacity = 100;
        }, 200);

        return () => clearTimeout(nameTimeout)
    }, []);



    const textToTop = () => {
        messageTextEl.current.style.marginTop = '15vh';
        setTimeout(() => {
            messageTextEl.current.setAttribute('rows', '5')
        }, 500)
    };

    const textToDefault = () => {
        messageTextEl.current.style.marginTop = '35vh';
        messageTextEl.current.setAttribute('rows', '1')
    };

    return (
        <div className='message__wrapper' ref={wrapper}>
            <div className='floating-name__wrapper' ref={nameWrapper}>
                <span className='floating-name'>{toName},</span>
            </div>
            <NavigationArrow direction='left' action={toPrevPage} text={prevPage}/>
            <textarea className='full-textarea'
                      placeholder={'Хочу сообщить что уже пора...'}
                      ref={messageTextEl}
                      onFocus={textToTop}
                      onBlur={textToDefault}
                      rows='1'
                      onChange={e => setMessage(e.target.value)}
                      value={message}
            ></textarea>
            <NavigationArrow direction='right' action={message ? toNextPage : undefined} text={nextPage}/>
        </div>
    )
};

export default Message;