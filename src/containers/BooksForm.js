import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BooksForm = () => {
  const handleClick = () => {};
  return (
    <div>
      <input placeholder="Title" />
      <select>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button type="button" value="Submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default BooksForm;
