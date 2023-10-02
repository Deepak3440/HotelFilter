
import React from "react";
import { useParams } from "react-router-dom";
import hotelsData from "./hotels"; 

const HotelDetail = () => {
  const { hotelName } = useParams();

 
  const hotel = hotelsData.find((hotel) => hotel.name === hotelName);

  
  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div>
      <h1>{hotel.name} Details</h1>
      <img src={hotel.image} alt={hotel.name} />
      <p>{hotel.des}</p>
      <p>Location: {hotel.location}</p>
      <p>Bedrooms: {hotel.bedrooms}</p>
      <p>Bathrooms: {hotel.bathrooms}</p>
      <p>Area: {hotel.area} sqft</p>
      <p>Room: {hotel.room} sqft</p>
      <p>Price: ${hotel.price}</p>
    </div>
  );
};

export default HotelDetail;
