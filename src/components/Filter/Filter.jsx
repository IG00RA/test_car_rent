import React from 'react';

function Filter() {
  return (
    <div className="filter">
      <div className="filter-item">
        <label htmlFor="carBrand">Car brand:</label>
        <select id="carBrand" name="carBrand">
          {/* Вставте ваші опції для вибору марки автомобіля */}
          <option value="brand1">Brand 1</option>
          <option value="brand2">Brand 2</option>
          <option value="brand3">Brand 3</option>
        </select>
      </div>
      <div className="filter-item">
        <label htmlFor="price">Price/1 hour:</label>
        <select id="price" name="price">
          {/* Вставте ваші опції для вибору ціни */}
          <option value="price1">$10</option>
          <option value="price2">$20</option>
          <option value="price3">$30</option>
        </select>
      </div>
      <div className="filter-item">
        <label htmlFor="from">From:</label>
        <input type="text" id="from" name="from" placeholder="Enter value" />
      </div>
      <div className="filter-item">
        <label htmlFor="to">To:</label>
        <input type="text" id="to" name="to" placeholder="Enter value" />
      </div>
    </div>
  );
}

export default Filter;
