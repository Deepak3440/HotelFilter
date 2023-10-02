import React from "react";
import { useParams } from "react-router-dom";
import hotelsData from "./hotels"; 
import './PropertyPage.css';

const PropertyPage = () => {
  const { id } = useParams();

  
  const hotel = hotelsData.find((hotel) => hotel.id === parseInt(id));

 
  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="property-page">
      <h1>{hotel.name}</h1>
      <img src={hotel.image} alt={hotel.name} />
      <p>{hotel.des}</p>
      <table className="property-table">
        <thead>
          <tr>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
            <th>Area</th>
            <th>Room</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{hotel.bedrooms}</td>
            <td>{hotel.bathrooms}</td>
            <td>{hotel.area} sqft</td>
            <td>{hotel.room} sqft</td>
            <td>${hotel.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PropertyPage;
