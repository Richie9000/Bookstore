import React from 'react';
import AddBooks from './AddBooks';
import BookPiece from './bookPiece';

const Books = () => (

  <div>
    <div>
      <h1>Books</h1>
      <ul>
        <BookPiece />
      </ul>
    </div>
    <div>
      <AddBooks />
    </div>
  </div>
);

export default Books;
