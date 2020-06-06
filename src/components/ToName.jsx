import React, {useEffect, useRef} from 'react';
import PageTitle from './common/PageTitle';
import NavigationArrow from "./common/NavigationArrow";
import {ANIM_DURATION_BASE as base} from 'constants/common'
import capitalize from 'lodash.capitalize'

const ToName = ({currentPage, toNextPage, nextPage, setToName, toName}) => {

    const wrapper = useRef();

    useEffect(() => {
        setTimeout(() => {
            wrapper.current.style.opacity = 100;
        }, base * .2)
    } ,[]);

    return (
        <div className='name__wrapper' ref={wrapper}>
            <PageTitle title={currentPage}/>
            <input type="text"
                   className='full-input'
                   placeholder="Кому хотим отправить?"
                   onChange={(event) => setToName(capitalize(event.target.value))}
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