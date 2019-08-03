import React from 'react';
import Search from '../Search';
import Button from '../Common/Button/Button';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Bot = ({bookFormVisible, setBookFormVisible}) => {
  return (
    <div className="bot">
      <Search className="nav" />
      <div className="menu-items">
        <Grid fluid>
          <Row>
            <Col xs={12} md>
              <Link className="menu-item" to="/">
                INICIO
              </Link>
            </Col>
            <Col xs={12} md>
              <Link className="menu-item with-separator" to="/nosotros">
                NOSOTROS
              </Link>
            </Col>
            <Col xs={12} md>
              <Link className="menu-item with-separator" to="/habitaciones">
                HABITACIONES
              </Link>
            </Col>
            <Col xs={12} md>
              <Link className="menu-item with-separator" to="/servicios">
                SERVICIOS
              </Link>
            </Col>
            <Col xs={12} md>
              <Link className="menu-item with-separator" to="/contactanos">
                CONTACTANOS
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
      <Button onClick={(e) => setBookFormVisible(!bookFormVisible)} className="menu-item">
        RESERVA AHORA
      </Button>
    </div>
  )
};

export default Bot;