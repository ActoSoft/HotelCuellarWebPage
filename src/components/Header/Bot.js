import React from 'react';
import Search from '../Search';
import Button from '../Common/Button/Button';

const Bot = () => {
  return (
    <div className="bot">
      <Search className="nav" />
      <div className="menu-items">
        <div className="menu-item">
          INICIO
        </div>
        <div className="menu-item with-separator">
          NOSOTROS
        </div>
        <div className="menu-item with-separator">
          HABITACIONES
        </div>
        <div className="menu-item with-separator">
          SERVICIOS
        </div>
        <div className="menu-item with-separator">
          CONTACTANOS
        </div>
      </div>
      <Button className="menu-item">
        RESERVA AHORA
      </Button>
    </div>
  )
};

export default Bot;