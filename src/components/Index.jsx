import React, {Fragment} from 'react';

import MainPage from "./MainPage";
import Intro from "./Intro";
import ToName from "./ToName";
import FromName from "./FromName";
import Message from "./Message";
import LinkPage from "./LinkPage";

const pages = [
    {name: '', component: <MainPage/>},
    {name: '', component: <Intro/>},
    {name: 'Кому', component: <ToName/>},
    {name: 'Текст', component: <Message/>},
    {name: 'От кого', component: <FromName/>},
    {name: 'Отослать', component: <LinkPage/>}
];


const Index = () => {
    const [currentPage, setPage] = React.useState(0);

    return (
        <div className='app-wrapper'>
            {pages[currentPage].component}
        </div>
    )
};

export default Index;