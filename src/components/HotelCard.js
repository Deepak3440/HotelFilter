import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faLocationDot,
  faChartArea,
  faHospital,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const HotelCard = ({ hotel }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);

    if (isLiked) {
      toast.success("Removed from favorites", { autoClose: 2000 });
    } else {
      toast.success("Added to favorites", { autoClose: 2000 });
    }
  };

  return (
    <div className="hotel-card">
      <div className="type-icon">
        <button className="type1">{hotel.type}</button>
      </div>
      <FontAwesomeIcon
        className={`heart-icon ${isLiked ? "liked" : ""}`}
        icon={faHeart}
        onClick={toggleLike}
      />
      <img src={hotel.image} alt={hotel.name} />
      <div className="hotel-info">
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot} /> {hotel.location}
        </div>
        <h3>{hotel.name}</h3>
        <table className="property-table">
          <tbody>
            <tr>
              <td>
                <FontAwesomeIcon icon={faBed} />
              </td>
              <td>
                <FontAwesomeIcon icon={faBath} />
              </td>
              <td>
                <FontAwesomeIcon icon={faChartArea} />
              </td>
              <td>
                <FontAwesomeIcon icon={faHospital} />
              </td>
            </tr>
            <tr>
              <td>{hotel.bedrooms} Bedrooms</td>
              <td>{hotel.bathrooms} Bathrooms</td>
              <td>{hotel.area} sqft</td>
              <td>{hotel.room} sqft</td>
            </tr>
          </tbody>
        </table>
        <div className="p">
          <div className="price">
            <p className="price">${hotel.price}</p>
          </div>
          <div className="q">
            <Link to={`/property/${hotel.id}`}>
              <button className="button">More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
