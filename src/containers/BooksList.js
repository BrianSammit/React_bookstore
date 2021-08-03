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
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </tbody>
  </table>
);

Component.prototype = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
};

const BookList = connect(mapStateToProps, null)(Component);
export default BookList;
