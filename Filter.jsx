// Filter.js
import React from 'react';

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" onChange={(e) => onTitleChange(e.target.value)} />

      <label htmlFor="rating">Rating:</label>
      <input type="number" id="rating" onChange={(e) => onRatingChange(e.target.value)} />
    </div>
  );
};

export default Filter;
