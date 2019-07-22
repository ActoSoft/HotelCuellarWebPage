import React from 'react';
import PropTypes from 'prop-types';
import './Typography.scss';

/**
 * "Typography" gives a handfull tool manage different types of typographise that can 
 * be used in the app.
 * @param {Object} props
 * @param {('body'|'body-bold'|'title'|'sub-title'|undefined)} props.variant
 * @param {('left'|'center'|'right'|'justified'|undefined)} props.align
 */
const Typography = ({variant, children, className, align, component, ...props}) => {
  if(!component) {
    component = 'p';
  }

  if(!variant) {
    variant = 'body';
  }

  let TypographyBase = component;
  
  return(
    <TypographyBase 
      className={ `${className ? className : ''} variant-${variant} align-${align ? align : 'left'}` }
      {...props}
    >
      { children }
    </TypographyBase>
  )
};

Typography.propTypes = {
  /**
   * The variant of the style of the typography.
   */
  variant: PropTypes.oneOf(['body', 'body-bold', 'title', 'sub-title', undefined]),
  /**
   * The alignment of the text.
   */
  align: PropTypes.oneOf(['left', 'center', 'right', 'justified', undefined])
}

export default Typography;