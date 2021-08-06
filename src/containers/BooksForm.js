import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';
import './style.css';

const BooksForm = ({ categories }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createBook({
        id: Math.floor(Math.random() * 100),
        title,
        category,
      }),
    );
    setTitle({ value: '' });
    setCategory({ value: '' });
  };

  return (
    <div className="form">
      <div className="Line" />

      <h2 className="title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input className="add" placeholder="Book title" required onChange={handleInputChange} value={title.value} />
        <select className="category" required onChange={handleSelectChange} value={category.value}>
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <button className="Rectangle" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

BooksForm.defaultProps = {
  categories: [],
};

export default BooksForm;
