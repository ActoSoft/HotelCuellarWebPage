import React from 'react';
import { Section, SectionHeader, Typography, Position, Button } from '../../Common';
import { FaPhone, FaSearchLocation, FaMailBulk } from 'react-icons/fa';
import { Grid, Col, Row } from 'react-flexbox-grid';

const ContactUs = () => {
  return(
    <Section className="ContactUs">
      <SectionHeader>
        <Typography component="h3" align="center" variant="title">
          Contáctanos
        </Typography>
        <Typography component="h4" align="center" variant="body">
          Ponte en contacto con nosotros
        </Typography>
      </SectionHeader>
      <Position className="contacts" align="center">
        <Grid fluid>
          <Row>
            <Col className="item" xs={12} md={4}>
              <FaMailBulk />
              <Typography align="center">Por email a</Typography>
              <Typography align="center">reservacioneshotelcuellar@gmail.com</Typography>
            </Col>
            <Col className="item" xs={12} md={4}>
              <FaPhone />
              <Typography align="center">Llámanos al</Typography>
              <Typography align="center">01 773 732 2920</Typography>
            </Col>
            <Col className="item" xs={12} md={4}>
              <FaSearchLocation />
              <Typography align="center">Tula de Allende, Hgo, México</Typography>
              <Typography align="center">5 de Mayo #23, Colonia Centro</Typography>
            </Col>
          </Row>
        </Grid>
      </Position>
      <form>
        <Grid fluid>
          <Row>
            <Col xs={12} md={6} className="left">
              <div className="input-control">
                <label htmlFor="name">Nombre Completo</label>
                <input id="name" type="text" placeholder="escribe aquí" />
              </div>
              <div className="input-control">
                <label htmlFor="email">Correo Electrónco</label>
                <input id="email" type="email" placeholder="escribe aquí" />
              </div>
              <div className="input-control">
                <label htmlFor="phone">Teléfono</label>
                <input id="phone" type="text" placeholder="escribe aquí" />
              </div>
            </Col>
            <Col xs={12} md={6} className="right">
              <div className="input-control">
                <label htmlFor="msj">Mensaje</label>
                <textarea id="msj" placeholder="escribe aquí" />
              <Button id="send" type="submit">Enviar</Button>
              </div>
            </Col>
          </Row>
        </Grid>
      </form>
    </Section>
  );
};

export default ContactUs;