import React, {createElement, Fragment} from 'react';
import {BsArrowRight as ArrowRight} from 'react-icons/bs'
import {BsArrowLeft as ArrowLeft} from 'react-icons/bs'

const NavigationArrow = ({direction, action, text = ''}) => {
  const component = direction === 'left' ? ArrowLeft : ArrowRight;
  return (
      <div className={`nav-arrow__wrapper ${direction}`}>
        {createElement(component, {onClick: action, className: `nav-arrow`})}
        <span>{text}</span>
      </div>
  )
};

export default React.memo(NavigationArrow);