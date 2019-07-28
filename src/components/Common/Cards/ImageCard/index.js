import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import Typography from '../../Typography';
import './ImageCard.scss';

/**
 * 'ImageCard' is the main component to show a little bit of information about images.
 */
const ImageCard = ({className, title, imgSrc, ...props}) => {
  return(
    <article className={`${className ? className : ''} ImageCard`}>
      <div className="header">
        <LazyLoad offsetVertical={400} >
          <img alt="room" src={imgSrc} />
        </LazyLoad>
      </div>
      <div className="body">
        <Typography className="card-title" variant="header" component="h3" align="center">
          { title }
        </Typography>
      </div>
    </article>
  );
};

ImageCard.propTypes = {
  /**
   * The title of the card, it must be short.
   */
  title: PropTypes.string.isRequired,
  /**
   * The source of the image of the card.
   */
  imgSrc: PropTypes.string.isRequired,
};

export default ImageCard;