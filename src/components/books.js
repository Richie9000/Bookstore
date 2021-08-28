import React from 'react';
import AddBooks from './AddBooks';
import BookPiece from './bookPiece';
import style from './books.module.css';

const Books = () => (
  <div className={style.div}>
    <div className={style.bookDiv}>
      <AddBooks />
    </div>
    <div>
      <ul className={style.ul}>
        <BookPiece />
      </ul>
    </div>
  </div>
);

export default Books;
