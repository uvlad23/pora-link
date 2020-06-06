import React, {useEffect, useState, useRef} from 'react';
import {Fade} from "react-awesome-reveal";
import {ANIM_DURATION_BASE as base} from "constants/common";
import NavigationArrow from "./common/NavigationArrow";
import capitalize from 'lodash.capitalize'

const Message = ({toNextPage, nextPage, setToName, toName, toPrevPage, prevPage}) => {
    const [isReady, setReady] = useState(false);
    const nameWrapper = useRef();
    useEffect(() => {
        const nameTimeout = setTimeout(() => {
            nameWrapper.current.style.fontSize = '48px';
            nameWrapper.current.style.paddingTop = '32px';
            nameWrapper.current.style.lineHeight = '0vh';
            setTimeout(() => {
                setReady(true);
            }, base)
        }, base * 1.2);
        return () => clearTimeout(nameTimeout)
    }, []);
    return (
        <Fade duration={base * 2}>
            <div className='message__wrapper'>
                <div className='floating-name__wrapper' ref={nameWrapper}>
                    <span className='floating-name'>{capitalize(toName)},</span>
                </div>
                <NavigationArrow direction='left' action={toPrevPage} text={prevPage}/>
                {isReady ? (
                    <input type="text"
                           className='full-input'
                           placeholder="Напишите Имя"
                           onChange={setToName}
                           onKeyDown={(e) => {
                               if(e.keyCode === 13) {
                                   e.preventDefault();
                                   toNextPage();
                               }
                           }}/>
                ) : null}
                <NavigationArrow direction='right' action={toNextPage} text={nextPage}/>
            </div>
        </Fade>
    )
};

export default Message;