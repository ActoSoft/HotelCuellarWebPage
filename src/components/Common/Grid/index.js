import React from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

/**
 * 'Grid' is a container component to display items in a responsive CSS grid.
 */
const Grid = ({itemMinWidth, className, children, component, ...props}) => {
  if(!component) {
    component = 'div';
  }

  let GridBase = component;

  return(
    <GridBase 
      className={`${className} Grid`} >
      { children }
    </GridBase>
  );
};

Grid.propTypes = {
  /**
   * Specifies the min width of the items in the grid. 
   */
  itemMinWidth: PropTypes.number.isRequired,
  /**
   * Adds CSS classes to the component 
   */
  className: PropTypes.string
};

export default Grid;