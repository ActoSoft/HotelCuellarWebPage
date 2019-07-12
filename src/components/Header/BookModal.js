import React from 'react';
import BookForm from './BookForm';

const BookModal = ({visible, setBookFormVisible}) => {
  const handleClose = e => {
    if(e.target.id === 'BookForm') {
      setBookFormVisible(!visible)
    }
  };

  return(
    <article id="BookForm" onClick={handleClose} className={`BookForm ${visible ? 'visible' : 'hidden'}`}>
      <BookForm visible={visible} setBookFormVisible={setBookFormVisible} />
    </article>
  )
};

export default BookModal;