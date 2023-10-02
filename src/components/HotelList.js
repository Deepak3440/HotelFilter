import React, { useState, useEffect } from "react";
import HotelCard from "./HotelCard";
import hotelsData from "./hotels";
import './hot.css';
import FilterNavbar from "./FilterNavbar";


function HotelList() {
  const [page, setPage] = useState(1);
  const hotelsPerPage = 6;
  const [selectedCity, setSelectedCity] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const cities = Array.from(new Set(hotelsData.map((hotel) => hotel.city)));
  const totalHotels = hotelsData.length;

  useEffect(() => {
    setPage(1);
  }, [selectedCity]);

  const loadMoreHotels = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const filterHotelsByCity = (city) => {
    setSelectedCity(city);
  };

  const startIndex = (page - 1) * hotelsPerPage;
  const endIndex = startIndex + hotelsPerPage;

  return (
    <div>
      <FilterNavbar cities={cities} onFilterChange={filterHotelsByCity} />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by hotel name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="hotel-list">
        {hotelsData
          .filter((hotel) =>
            (selectedCity === "All" || hotel.city === selectedCity) &&
            (searchTerm === "" ||
              hotel.name.toLowerCase().includes(searchTerm.toLowerCase()))
          )
          .slice(startIndex, endIndex)
          .map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
      </div>
      <div className="pagination">
        {page > 1 && (
          <div className="prev-button">
            <button onClick={goToPreviousPage}>Previous</button>
          </div>
        )}
        {endIndex < totalHotels && (
          <div className="load-more-button">
            <button onClick={loadMoreHotels}>View More</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HotelList;
