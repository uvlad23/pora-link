import React, {useEffect, useRef} from 'react';
import {Fade} from "react-awesome-reveal";
import {ANIM_DURATION_BASE as base} from "constants/common";
import PageTitle from "./common/PageTitle";
import NavigationArrow from "./common/NavigationArrow";
import capitalize from 'lodash.capitalize'
import {noSymbolsString} from "../lib/helper";

const FromName = ({toNextPage, nextPage, setFromName, fromName, toPrevPage, prevPage, currentPage}) => {
    const wrapper = useRef();

    useEffect(() => {
        const timeout = setTimeout(() => {
            wrapper.current.style.opacity = 100;
        }, base * .2)
        return () => clearTimeout(timeout);
    } ,[]);

    return (
        <div className='name__wrapper' ref={wrapper}>
            <PageTitle title={currentPage} secret={true}/>
            <NavigationArrow direction='left' action={toPrevPage} text={prevPage}/>
            <input type="text"
                   className='full-input'
                   placeholder="Ваше имя"
                   onChange={e => setFromName(noSymbolsString(e.target.value))}
                   value={fromName}
                   onKeyDown={(e) => {
                       if(e.keyCode === 13 && fromName) {
                           e.preventDefault();
                           toNextPage();
                       }
                   }}/>
            <NavigationArrow direction='right' action={fromName ? toNextPage : undefined} text={nextPage}/>
        </div>
    );
};

export default FromName;