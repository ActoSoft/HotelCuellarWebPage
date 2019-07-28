import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

/**
 * A container component to normalize all the sections of the different sites in the 
 * system.
 */
const Section = ({className, component, children, ...props}) => {
  if(!component) {
    component = 'section';
  }

  let SectionBase = component;

  return(
    <SectionBase {...props} className={`${className} Section`}>
      { children }
    </SectionBase>
  );
};

const SectionHeader = ({component, className, children, ...props}) => {
  if(!component) {
    component = 'section';
  }

  let HeaderBase = component;

  return(
    <HeaderBase {...props} className={`${className} SectionHeader`}>
      { children }
    </HeaderBase>
  );
};

Section.propTypes = {
  /**
   * To add classes to the component.
   */
  className: PropTypes.string,
};

SectionHeader.propTypes = {
  /**
   * To add classes to the component.
   */
  className: PropTypes.string,
};

export default Section;

export { SectionHeader };