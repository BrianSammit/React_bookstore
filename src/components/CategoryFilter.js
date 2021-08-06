import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './CategoryFilter.css';

const CategoryFilter = ({ handleFilterChange, categories }) => (
  <div className="panel-bg">
    <div className="filter">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <div className="cat">
        <h3 className="BOOKS">BOOKS</h3>
        <select className="CATEGORIES" onChange={handleFilterChange}>
          <option value="all">CATEGORIES</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
    </div>
    <div className="Oval">
      <FontAwesomeIcon icon={faUser} className="Mask" />
    </div>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.string),
};

CategoryFilter.defaultProps = {
  handleFilterChange: null,
  categories: [],
};

export default CategoryFilter;
