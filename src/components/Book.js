import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, remove } = props;
  return (
    <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.category}</td>
      <td>{book.title}</td>
      <button type="button" onClick={remove} value={book.id}>
        Remove
      </button>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  remove: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: '',
};

export default Book;
