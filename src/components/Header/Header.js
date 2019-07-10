import React from 'react';
import Top from './Top';
import Mid from './Mid';
import Bot from './Bot';
import './Header.scss';

const Header = () => {
  return (
    <React.Fragment>
      <header className="Header">
        <Top />
        <Mid />
      </header>
      <Bot />
    </React.Fragment>
  );
};

export default Header;