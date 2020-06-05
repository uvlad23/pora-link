import React, {Fragment} from 'react';
import Arrow from './common/Arrow';

const MainPage = props => {
    return (
        <div className='main-page__wrapper'>
            <Arrow direction={'left'}/>
            <div className="container">
                <h1>Main Page</h1>
            </div>
        </div>
    );
};

export default MainPage;