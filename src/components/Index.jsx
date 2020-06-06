import React, {createElement, useState} from 'react';

import MainPage from "./MainPage";
import Intro from "./Intro";
import ToName from "./ToName";
import FromName from "./FromName";
import Message from "./Message";
import LinkPage from "./LinkPage";

const pages = [
    {title: '', component: MainPage},
    {title: '', component: Intro},
    {title: 'Кому', component: ToName},
    {title: 'Текст', component: Message},
    {title: 'От кого', component: FromName},
    {title: 'Отослать', component: LinkPage}
];

const propsToComponent = (Component, props) => <Component {...props}/>

const Index = () => {
    const [currentPage, setPage] = useState(1);
    const [toName, setToName] = useState('');
    const [fromName, setFromName] = useState('');
    const [message, setMessage] = useState('');

    const toNextPage = () => {
        const nextIdx = currentPage + 1;
        if(nextIdx < pages.length) {
            setPage(nextIdx);
        }
    };
    const toPrevPage = () => {
        const nextIdx = currentPage - 1;
        if(nextIdx > 0) {
            setPage(nextIdx);
        }
    };

    return (
        <div className='app-wrapper'>
            {
                createElement(pages[currentPage].component,
                {
                    toNextPage, toPrevPage,
                    currentPage: pages[currentPage].title,
                    prevPage: pages[currentPage - 1] ? pages[currentPage - 1].title : '',
                    nextPage: pages[currentPage + 1] ? pages[currentPage + 1].title : '',
                    toName, setToName,
                    fromName, setFromName,
                    message, setMessage
                })
            }
        </div>
    )
};

export default Index;