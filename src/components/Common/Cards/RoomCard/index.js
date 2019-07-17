import React from 'react';
import Button from '../../Button';
import { Link } from 'react-router-dom';

const RoomCard = ({ title, pricing, description, key, imgSrc }) => {
  return(
    <article className="RoomCard">
      <div className="header">
        <img alt="room" src={imgSrc} />
        <p className="pricing">{pricing}</p>
      </div>
      <div className="body">
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
      </div>
      <Button component={Link} to="/book" > Reservar </Button>
    </article>
  )
};

export default RoomCard;