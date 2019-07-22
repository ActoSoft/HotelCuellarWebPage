import React from 'react';
import { RoomCard } from '../Common/Cards';
import './Rooms.scss';
import { Typography } from '../Common';
import Section, { SectionHeader } from '../Common/Section';
import Grid from '../Common/Grid';

const Rooms = ({ rooms }) => {
  return(
    <Section>
      <SectionHeader>
        <Typography component="h2" align="center" variant="title">
          Alojamiento De Lujo
        </Typography>
        <Typography component="h3" align="center" variant="body">
          Lorem ipsum dolor amet selfies lyft small batch, nisi skateboard vexillologist trust fund leggings meditation hot chicken forage actually subway tile edison bulb. Ramps bespoke labore sriracha. Hella wayfarers locavore narwhal plaid veniam. Franzen copper mug actually, cray glossier excepteur affogato enamel pin.
        </Typography>
      </SectionHeader>
      <Grid className="Rooms">
        { rooms.map(room => <RoomCard {...room} />) }
      </Grid>
    </Section>
  );
};

export default Rooms;