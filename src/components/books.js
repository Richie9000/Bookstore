import React from 'react';
import AddBooks from './AddBooks';
import BookPiece from './bookPiece';
import style from './books.module.css';

const Books = () => (
  <div className={style.div}>
    <ul className={style.ul}>
      <BookPiece />
    </ul>
    <div>
      <div className={style.bookDiv}>
        <AddBooks />
      </div>
    </div>
  </div>
);

export default Books;
