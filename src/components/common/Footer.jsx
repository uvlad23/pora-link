import React from 'react';

const Footer = ({onClick}) => {
    return (
        <footer className='footer'>
            <h3 onClick={onClick}>Уже пора</h3>
        </footer>
    )
}

export default Footer;