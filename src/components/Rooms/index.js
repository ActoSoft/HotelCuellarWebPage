import React from 'react';
import './Rooms.scss';
import { Typography, Button, Section, SectionHeader, RoomCard, Position } from '../Common';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Rooms = ({ rooms }) => {
  return(
    <Section>
      <SectionHeader title="Alojamiento De Lujo"
        extra="Lorem ipsum dolor amet selfies lyft small batch, nisi skateboard vexillologist trust fund leggings meditation hot chicken forage actually subway tile edison bulb. Ramps bespoke labore sriracha. Hella wayfarers locavore narwhal plaid veniam. Franzen copper mug actually, cray glossier excepteur affogato enamel pin."
      />
        
      <Grid fluid className="Rooms">
        <Row>
          { rooms.map(room => <Col xs={12} md={4}><RoomCard {...room} /></Col>) }
        </Row>
      </Grid>
      <Position align="center">
        <Button style={{width: '350px'}} className="dark" component={Link} to="/all-rooms">Ver todos los cuartos.</Button>
      </Position>
    </Section>
  );
};

export default Rooms;