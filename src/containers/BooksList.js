import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ categories }) => {
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const id = parseFloat(e.target.value);
    dispatch(removeBook(id));
  };

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const booksFilter = () => {
    if (filter !== 'all') {
      return books.filter((book) => book.category === filter);
    }
    return books;
  };
  return (
    <>
      <CategoryFilter categories={categories} handleFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {booksFilter().map((book) => (
            <Book key={book.id} book={book} remove={handleClick} />
          ))}
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

BooksList.defaultProps = {
  categories: [],
};

export default BooksList;
