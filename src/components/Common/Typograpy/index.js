import React from 'react';

const Typography = ({variant, children, component, ...props}) => {
  if(!component) {
    component = 'p';
  }

  if(!variant) {
    variant = 'body';
  }

  let TypographyBase = component;
  
  return(
    <TypographyBase 
      className={ `${className ? className : ''} ${variant}` }
      {...props}
    >
      { children }
    </TypographyBase>
  )
};

export default Typography;