import React from 'react';
import Search from '../Search';
import Button from '../Common/Button/Button';
import { Link } from 'react-router-dom';

const Bot = () => {
  return (
    <div className="bot">
      <Search className="nav" />
      <div className="menu-items">
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
      <Button className="menu-item">
        RESERVA AHORA
      </Button>
    </div>
  )
};

export default Bot;