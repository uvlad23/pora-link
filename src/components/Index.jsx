import React, {createElement} from 'react';

import MainPage from "./MainPage";
import Intro from "./Intro";
import ToName from "./ToName";
import FromName from "./FromName";
import Message from "./Message";
import LinkPage from "./LinkPage";

const pages = [
    {name: '', component: MainPage},
    {name: '', component: Intro},
    {name: 'Кому', component: ToName},
    {name: 'Текст', component: Message},
    {name: 'От кого', component: FromName},
    {name: 'Отослать', component: LinkPage}
];

const propsToComponent = (Component, props) => <Component {...props}/>

const Index = () => {
    const [currentPage, setPage] = React.useState(0);

    const nextPage = () => {
        console.warn('next page');
        const nextIdx = currentPage + 1;
        if(nextIdx < pages.length) {
            setPage(nextIdx);
        }
    };
    const prevPage = () => {
        console.warn('prev page');
        const nextIdx = currentPage - 1;
        if(nextIdx > 0) {
            setPage(nextIdx);
        }
    };

    return (
        <div className='app-wrapper'>
            {createElement(pages[currentPage].component, {nextPage, prevPage})}
        </div>
    )
};

export default Index;