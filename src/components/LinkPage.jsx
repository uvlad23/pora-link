import React, {useEffect, useRef, useState} from 'react';
import {ANIM_DURATION_BASE as base} from "constants/common";
import PageTitle from "./common/PageTitle";
import NavigationArrow from "./common/NavigationArrow";
import copy from 'copy-to-clipboard';
import {saveMessage} from "../actions/api";

const clickLinkHandler = (e) => {
    copy(e.target.innerHTML);
};

const LinkPage = ({currentPage, toPrevPage, prevPage, toName, fromName, message}) => {

    const wrapper = useRef();
    const [generatedId, setGeneratedId] = useState();

    useEffect(() => {
        saveMessage(toName ,fromName, message)
            .then(res => {
                console.error(res);
                if(res && res.data && res.data.id) {
                    const generatedId = res.data.id.split('.')[0];
                    setGeneratedId(generatedId)
                    wrapper.current.style.opacity = 100;
                }
            })
    } ,[]);

    const linkPageLayout = (
        <div className='link-page__wrapper' ref={wrapper}>
            <PageTitle title={currentPage}/>
            <NavigationArrow direction='left' action={toPrevPage} text={prevPage}/>
            <div className="container">
                <div className="link-page">
                    <p>Ваше персональное сообщение здесь</p>
                    <h2 className='message-link'
                        onClick={clickLinkHandler}>
                        {`${window.location.href + generatedId}/${toName}/${fromName}`}
                    </h2>
                    <p>Или покиньте интернет и просто позвоните</p>
                </div>
            </div>
        </div>
    );

    return generatedId ? linkPageLayout : null
};

export default LinkPage;