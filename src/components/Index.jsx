import 'intersection-observer';
import React, {createElement, useState, useEffect} from 'react';

import MainPage from "./MainPage";
import Intro from "./Intro";
import ToName from "./ToName";
import FromName from "./FromName";
import Message from "./Message";
import LinkPage from "./LinkPage";
import ReadMessage from './readMessage/ReadMessage'
import MessageIntro from './readMessage/Intro';

import {readMessage} from "../actions/api";
import Footer from "./common/Footer";

const pages = [
    {title: '', component: MessageIntro},
    {title: 'Сообщение', component: ReadMessage},
    {title: 'Главная страница', component: MainPage},
    {title: 'Интро', component: Intro},
    {title: 'Кому', component: ToName},
    {title: 'Текст', component: Message},
    {title: 'От кого', component: FromName},
    {title: 'Отослать', component: LinkPage}
];

const Index = () => {
    const
        [currentPage, setPage] = useState(2),
        [toName, setToName] = useState(''),
        [fromName, setFromName] = useState(''),
        [message, setMessage] = useState(''),
        [isAppReady, setReady] = useState(false),
        [addProps, setAddProps] = useState();

    const toNextPage = () => {
        const nextIdx = currentPage + 1;
        if(nextIdx < pages.length) {
            setPage(nextIdx);
        }
    };
    const toPrevPage = () => {
        const nextIdx = currentPage - 1;
        if(nextIdx > 1) {
            setPage(nextIdx);
        }
    };

    const toPage = (pageIdx, additionalProps) => {
        if(additionalProps) {
            setAddProps(additionalProps);
        }
        setPage(pageIdx);
    };

    useEffect(() => {
        const path = window.location.pathname;
        if(path !== '/') {
            const parts = path.split('/');
            readMessage(parts[1], parts[2], parts[3]).then(res => {
                if(res.status === 200 && res.data && res.data.status ==='success' && res.data.message) {
                    toPage(0, res.data.message)
                }
            }).finally(() => {
                setReady(true)
            })
        } else {
            setReady(true)
        }
    }, []);

    const getPage = () => {
        return (
            createElement(pages[currentPage].component,
                {
                    toNextPage, toPrevPage,
                    currentPage: pages[currentPage].title,
                    prevPage: pages[currentPage - 1] ? pages[currentPage - 1].title : '',
                    nextPage: pages[currentPage + 1] ? pages[currentPage + 1].title : '',
                    toName, setToName,
                    fromName, setFromName,
                    message, setMessage,
                    addProps, toPage
                })
        )

    };

    return (
        <div className='app-wrapper'>
            { isAppReady ? getPage() : null }
            <Footer onClick={() => {toPage(2)}}/>
        </div>
    )
};

export default Index;