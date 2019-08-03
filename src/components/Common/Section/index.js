import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';
import { Typography, Grid } from '..';
import { Row, Col } from 'react-flexbox-grid';

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

const SectionHeader = ({component, className, children, title, extra, ...props}) => {
  if(!component) {
    component = 'section';
  }

  let HeaderBase = component;

  return(
    <HeaderBase {...props} className={`${className} SectionHeader`}>
      <Grid fluid>
        <Row center="xs">
          <Col xs={12} md={9}>
            <Typography component="h2" align="center" variant="title">
              {title}
            </Typography>
          </Col>
          <Col xs={12} md={10}>
            <Typography align="center" variant="body">
              {extra}
            </Typography>
          </Col>
        </Row>
      </Grid>
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