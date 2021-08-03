import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr key={book.id}>
    <td>{book.id}</td>
    <td>{book.category}</td>
    <td>{book.title}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

Book.defaultProps = {
  book: '',
};

export default Book;
