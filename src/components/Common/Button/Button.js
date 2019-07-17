import React from 'react';
import './Button.scss';

const Button = ({className, type, onClick, children, component, ...props}) => {
  if(!component) {
    component = 'button';
  }

  let ButtonBase = component;

  if(ButtonBase === 'button' && props.href) {
    ButtonBase = 'a';
  }

  return(
    <ButtonBase {...props} onClick={onClick} type={type ? type : 'button'} className={`Button ${className ? className : ''}`}>
      {
        children
      }
    </ButtonBase>
  )
};

export default Button;