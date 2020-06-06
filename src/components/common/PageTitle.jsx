import React from 'react';

const PageTitle = ({title}) => {
    return (
        <div className='page-title__wrapper'>
            <span className='page-title'>{title}</span>
        </div>
    )
}

export default PageTitle;