import React, {useEffect, useRef} from 'react';
import PageTitle from './common/PageTitle';
import NavigationArrow from "./common/NavigationArrow";
import {ANIM_DURATION_BASE as base} from 'constants/common'
import capitalize from 'lodash.capitalize'

const ToName = ({currentPage, toNextPage, nextPage, setToName, toName, toPrevPage}) => {

    const wrapper = useRef();

    useEffect(() => {
        const timeout = setTimeout(() => {
            wrapper.current.style.opacity = 100;
        }, base * .2)
        return () => clearTimeout(timeout);
    } ,[]);

    return (
        <div className='name__wrapper' ref={wrapper}>
            <NavigationArrow direction='left' action={toPrevPage}/>
            <PageTitle title={currentPage}/>
            <input type="text"
                   className='full-input'
                   placeholder="Напишите имя"
                   onChange={(event) => setToName(event.target.value)}
                   value={toName}
                   onKeyDown={(e) => {
                       if(e.keyCode === 13 && toName) {
                           e.preventDefault();
                           toNextPage();
                       }
                   }}
            />
            <NavigationArrow direction='right' action={toName ? toNextPage : undefined} text={nextPage}/>
        </div>
    );
};

export default ToName;