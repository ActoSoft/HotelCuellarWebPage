import React from 'react';
import { RoomCard } from '../Common/Cards';
import './Rooms.scss';
import { Typography } from '../Common';

const Rooms = ({ rooms }) => {
  return(
    <React.Fragment>
      <div className="rooms-header">
        <Typography component="h2" align="center" variant="title">
          Alojamiento De Lujo
        </Typography>
        <Typography component="h3" align="center" variant="body">
          Lorem ipsum dolor amet selfies lyft small batch, nisi skateboard vexillologist trust fund leggings meditation hot chicken forage actually subway tile edison bulb. Ramps bespoke labore sriracha. Hella wayfarers locavore narwhal plaid veniam. Franzen copper mug actually, cray glossier excepteur affogato enamel pin.
        </Typography>
      </div>
      <section className="Rooms">
        { rooms.map(room => <RoomCard {...room} />) }
      </section>
    </React.Fragment>
  );
};

export default Rooms;