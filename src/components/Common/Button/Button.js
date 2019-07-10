import React from 'react';
import './Button.scss';

const Button = ({className, type, onClick, children}) => {
  return(
    <button onClick={onClick} type={type ? type : 'button'} className={`Button ${className}`}>
      {
        children
      }
    </button>
  )
};

export default Button;