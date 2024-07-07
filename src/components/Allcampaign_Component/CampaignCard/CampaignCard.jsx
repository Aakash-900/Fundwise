import React from "react";
import "./CampaignCard.css";
import { Link } from "react-router-dom";

const truncateText = (text, limit) => {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

const CampaignCard = ({ _id, image, title, story, supporters = 0, comments = 0 }) => {
  const truncatedDescription = truncateText(story, 100); // Truncate description to 100 characters

  return (
    <Link to={`/campaign/${_id}`} state={{ campaign: { _id, image, title, story, supporters, comments, raised: 23000, goal: 55000, daysLeft: 55, donators: ["Bipin Thapa", "Aakash Chaudhary", "Bishal Khadka", "Siddharth Gurung", "Samir Sherchan"] } }} className="campaign-card-link">
      <div className="campaign-card">
        <img src={`http://localhost:5500${image}`} alt={title} className="campaign-card-image" onError={(e) => { e.target.onerror = null; e.target.src = "fallback_image_url"; }} />
        <div className="campaign-card-content">
          <h3 className="campaign-card-title">{title}</h3>
          <p className="campaign-card-description">{truncatedDescription}</p>
          <div className="campaign-card-info">
            <p className="campaign-card-supporters">{supporters} Supporters</p>
            <p className="campaign-card-comments">{comments} Comments</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
