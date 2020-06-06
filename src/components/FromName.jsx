import React from 'react';
import {Fade} from "react-awesome-reveal";
import {ANIM_DURATION_BASE as base} from "constants/common";
import PageTitle from "./common/PageTitle";
import NavigationArrow from "./common/NavigationArrow";

const FromName = ({toNextPage, nextPage, setToName, toName, toPrevPage, prevPage, currentPage}) => {
    return (
        <Fade duration={base * 2}>
            <div className='toName__wrapper'>
                <PageTitle title={currentPage}/>
                <NavigationArrow direction='left' action={toPrevPage} text={prevPage}/>
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
                <NavigationArrow direction='right' action={toNextPage} text={nextPage}/>
            </div>
        </Fade>
    );
};

export default FromName;