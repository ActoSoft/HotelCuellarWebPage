import React from 'react';
import { RoomCard } from '../Common/Cards';
import './Rooms.scss';

const Rooms = ({ rooms }) => {
  return(
    <section className="Rooms">
      { rooms.map(room => <RoomCard {...room} />) }
    </section>
  );
};

export default Rooms;