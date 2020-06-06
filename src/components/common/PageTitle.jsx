import React, {useState, useEffect} from 'react';

const PageTitle = ({title, secret}) => {
    let handler;

    if(secret) {
        const [count, setCount] = useState(0);
        useEffect(() => {
            if(count === 23) {
                window.location = 'http://t.me/vladislav_ulyanenko'
            }
        });
        handler = () => {
            setCount(count + 1)
        };
    }

    return (
        <div className='page-title__wrapper' onClick={handler}>
            <span className='page-title'>{title}</span>
        </div>
    )
}

export default PageTitle;