import React, { useState } from "react";
import "./FilterNavbar.css";

function FilterNavbar({ cities, onFilterChange, onViewMoreClick }) {
  const [activeCity, setActiveCity] = useState(cities[0]);

  const handleFilterClick = (city) => {
    setActiveCity(city);
    onFilterChange(city);
  };

  return (
    <div>
      <div class="text-center">
        <h1>Feature listed Property</h1>
      </div>
      <div class="text-center margin-bottom">
        <p>
          Real estate can be bought, sold, rented, and can be a
          <br></br> valuable investment opportunity
        </p>
      </div>
      <div className="filter-navbar">
        <div className="filter-buttons">
          {cities.map((city, index) => (
            <button
              key={city}
              className={`filter-button ${
                activeCity === city ? "active" : ""
              }`}
              onClick={() => handleFilterClick(city)}
            >
              {city}
            </button>
          ))}
        </div>
        <div className="view-more-button">
          <button onClick={onViewMoreClick}>View More</button>
        </div>
      </div>
    </div>
  );
}

export default FilterNavbar;
