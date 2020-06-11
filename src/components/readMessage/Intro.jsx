import React from 'react';
import PlayButton from "../common/PlayButton";

const Intro = ({addProps, toNextPage}) => {
    return (
        <div className='intro'>
            <div className="intro__first">
                <p>{addProps.toName}</p>
                <span className='close'/>
                <p className='p_dimmed'>{addProps.fromName}</p>
            </div>
            <div className="intro__second">
                <div className="play__message">
                    <a onClick={toNextPage}>
                        <PlayButton/>
                    </a>
                    <p>Старт</p>
                </div>
            </div>
        </div>
    )
}

export default Intro;