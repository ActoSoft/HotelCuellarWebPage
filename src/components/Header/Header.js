import React from 'react';
import Top from './Top';
import Mid from './Mid';
import Bot from './Bot';
import './Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <Top />
      <Mid />
      <Bot />
    </header>
  );
};

export default Header;