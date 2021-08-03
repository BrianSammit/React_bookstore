import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const mapStateToProps = (state) => {
  const { books } = state;
  return { books };
};

const Component = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Category</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </tbody>
  </table>
);

Component.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
};

const BooksList = connect(mapStateToProps, null)(Component);
export default BooksList;
