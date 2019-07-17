import React from 'react';
import Button from '../../Button';
import { Link } from 'react-router-dom';
import './RoomCard.scss';

const RoomCard = ({ title, pricing, description, key, imgSrc }) => {
  return(
    <article className="RoomCard">
      <div className="header">
        <img alt="room" src={imgSrc} />
        <div className="pricing-box"></div>
        <div className="pricing-container">
          <p className="pricing">${pricing}</p>
          <p className="desc">la noche</p>
        </div>
      </div>
      <div className="body">
        <h4 className="title">{title}</h4>
        <div className="description">
          <p>{description.substring(0, 230)}...</p>
        </div>
      </div>
      <div className="buttons">
        <Button component={Link} to="/book" > Reservar </Button>
      </div>
    </article>
  )
};

export default RoomCard;