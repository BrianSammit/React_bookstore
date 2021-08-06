import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

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
    <form onSubmit={handleSubmit}>
      <input required onChange={handleInputChange} value={title.value} />
      <select required onChange={handleSelectChange} value={category.value}>
        <option value="">Category</option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

BooksForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

BooksForm.defaultProps = {
  categories: [],
};

export default BooksForm;
