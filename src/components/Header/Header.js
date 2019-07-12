import React, { useState } from 'react';
import Top from './Top';
import Mid from './Mid';
import Bot from './Bot';
import './Header.scss';
import BookModal from './BookModal';

const Header = () => {
  const [ bookFormVisible, setBookFormVisible ] = useState(false);
  return (
    <React.Fragment>
      <header className="Header">
        <Top />
        <Mid />
      </header>
      <Bot bookFormVisible={bookFormVisible} setBookFormVisible={setBookFormVisible} />
      <BookModal setBookFormVisible={setBookFormVisible} visible={bookFormVisible} />
    </React.Fragment>
  );
};

export default Header;