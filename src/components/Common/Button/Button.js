import React from 'react';
import './Button.scss';

const Button = ({className, type, onClick, children, component, dark, ...props}) => {
  if(!component) {
    component = 'button';
  }

  let ButtonBase = component;

  if(ButtonBase === 'button' && props.href) {
    ButtonBase = 'a';
  }

  return(
    <ButtonBase {...props} 
      onClick={onClick} 
      type={type ? type : 'button'} 
      className={
        `
          Button ${className ? className : ''}
          ${dark ? 'dark' : ''}
        `
      }>
      {
        children
      }
    </ButtonBase>
  )
};

export default Button;