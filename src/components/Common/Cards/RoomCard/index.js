import React from 'react';
import Button from '../../Button';
import { Link } from 'react-router-dom';
import './RoomCard.scss';
import { Typography } from '../..';
import LazyLoad from 'react-lazy-load';

const RoomCard = ({ title, pricing, description, key, imgSrc }) => {
  return(
    <article className="RoomCard">
      <div className="header">
        <LazyLoad offsetVertical={400} >
          <img alt="room" src={imgSrc} />
        </LazyLoad>
        <div className="pricing-box"></div>
        <div className="pricing-container">
          <p className="pricing">${pricing}</p>
          <p className="desc">la noche</p>
        </div>
      </div>
      <div className="body">
        <Typography className="card-title" variant="sub-title" component="h4" >{title}</Typography>
        <div className="description">
          <Typography align="justified">
            {description.substring(0, 230)}...
          </Typography>
        </div>
      </div>
      <div className="buttons">
        <Button component={Link} to="/book" > Reservar </Button>
      </div>
    </article>
  )
};

export default RoomCard;