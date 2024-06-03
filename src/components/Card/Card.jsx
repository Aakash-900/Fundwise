import React from "react";
import "./Card.css";



const Card = ({ date, title, description, donations, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <p className="card-date">{date}</p>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-donations">{donations} donations</p>
        <button className="card-button">Donate now</button>
      </div>
    </div>
  );
};

export default Card;