import React from 'react';
import PageTitle from './common/PageTitle';
import NavigationArrow from "./common/NavigationArrow";
import { Fade } from 'react-awesome-reveal';
import {ANIM_DURATION_BASE as base} from 'constants/common'

const ToName = ({currentPage, toNextPage, nextPage, setToName, toName}) => {
    return (
        <Fade duration={base * 2}>
            <div className='toName__wrapper'>
                <PageTitle title={currentPage}/>
                <input type="text"
                       className='full-input'
                       placeholder="Напишите Имя"
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
        </Fade>
    );
};

export default ToName;