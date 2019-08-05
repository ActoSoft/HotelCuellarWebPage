import React, { useState } from 'react';
import Search from '../Search';
import Button from '../Common/Button/Button';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
// import { Grid, Row, Col } from 'react-flexbox-grid';

const Bot = ({bookFormVisible, setBookFormVisible}) => {
  const [itemsState, setItemsState] = useState("hidden");

  
  
  return (
    <div className="bot">
      <Search className="nav" />
              
      <div className={`menu-items ${itemsState}`}>
        {/* <Grid className="items-grid" fluid>
          <Row around="md">
            <Col xs={12} md>
            </Col>
            <Col xs={12} md>
            </Col>
            <Col xs={12} md>
            </Col>
            <Col xs={12} md>
            </Col>
            <Col xs={12} md>
            </Col>
          </Row>
        </Grid> */}
              <div className="menu">
                <MdMenu />
              </div>
              <Link className="menu-item" to="/">
                INICIO
              </Link>

              <Link className="menu-item with-separator" to="/nosotros">
                NOSOTROS
              </Link>

              <Link className="menu-item with-separator" to="/habitaciones">
                HABITACIONES
              </Link>

              <Link className="menu-item with-separator" to="/servicios">
                SERVICIOS
              </Link>

              <Link className="menu-item with-separator" to="/contactanos">
                CONTACTANOS
              </Link>
      </div>
      <Button onClick={(e) => setBookFormVisible(!bookFormVisible)} className="menu-item">
        RESERVA AHORA
      </Button>
    </div>
  )
};

export default Bot;