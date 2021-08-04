import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BooksForm = () => {
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
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={title.value} />
      <select onChange={handleSelectChange} value={category.value}>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
