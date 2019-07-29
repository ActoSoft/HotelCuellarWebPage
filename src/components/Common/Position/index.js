import React from 'react';
import './Position.scss';

/**
 * 'Position' is a component that helps to align elements in many ways.
 * @param {Object} props
 * @param {('left'|'center'|'right')} props.align
 * @param {('center')} props.verticalAlign
 * @param {('column')} props.flexDirection
 * @param {(string)} props.className
 */
const Position = ({align, className, component, children, verticalAlign, flexDirection, ...props}) => {
  if(!component) {
    component = 'div';
  }

  if(!align) {
    align = 'left';
  }

  let PositionBase = component;

  return(
    <PositionBase 
      className={ `
        ${className} Position pos-align-${align}
        pos-vertical-align-${verticalAlign}
        pos-flex-direction-${flexDirection}
      `}
      {...props} >
      { children }
    </PositionBase>
  );
};

export default Position;