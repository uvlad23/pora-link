import React, {useEffect, useRef, useState} from 'react';
import {ANIM_DURATION_BASE as base} from "constants/common";
import PageTitle from "./common/PageTitle";
import NavigationArrow from "./common/NavigationArrow";
import copy from 'copy-to-clipboard';
import {saveMessage} from "../actions/api";
import AdaptiveText from 'react-adaptive-text';

const clickLinkHandler = (e) => {
    copy(e.target.innerHTML);
};
let lastSaveId;
let savedValue;
const LinkPage = ({currentPage, toPrevPage, prevPage, toName, fromName, message, toPage}) => {

    const wrapper = useRef();
    const messageLink = useRef();
    const [generatedId, setGeneratedId] = useState(savedValue);

    useEffect(() => {
        const saveId = toName + fromName + message;
        if(lastSaveId !== saveId) {
            lastSaveId = saveId;
            saveMessage(toName ,fromName, message)
                .then(res => {
                    if(res && res.data && res.data.id) {
                        const generatedId = res.data.id.split('.')[0];
                        savedValue = generatedId;
                        setGeneratedId(generatedId);
                        wrapper.current.style.opacity = 100;
                    } else {
                        toPage(2)
                    }
                }).catch(() => {
                    toPage(2)
            })
        } else {
            wrapper.current.style.opacity = 100;
        }
    } ,[]);

    //messageLink.current.fontSize = `${link.length * 2}vw`;
    const link = `${window.location.href + generatedId}/${toName}/${fromName}`;

    const linkPageLayout = (
        <div className='link-page__wrapper' ref={wrapper}>
            <PageTitle title={currentPage}/>
            <NavigationArrow direction='left' action={toPrevPage} text={prevPage}/>
            <div className="container">
                <div className="link-page">
                    <p>Ваше персональное сообщение здесь</p>
                    <a className='message-link'
                        ref={messageLink}
                        target='_blank'
                        href={link}>
                        <AdaptiveText width='100%' text={link}/>
                    </a>
                    <p className='main-line'>Скопируйте ссылку и отправьте любым удобным для Вас способом</p>
                    <p>Или покиньте интернет и просто позвоните</p>
                </div>
            </div>
        </div>
    );

    return generatedId ? linkPageLayout : null
};

export default LinkPage;