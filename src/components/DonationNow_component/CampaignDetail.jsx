import React from 'react';
import { useLocation } from 'react-router-dom';
import './CampaignDetail.css';

const CampaignDetail = () => {
  const location = useLocation();
  const { campaign } = location.state;

  if (!campaign) {
    return <p>No campaign data found.</p>;
  }

  const progressPercentage = (campaign.raised / campaign.goal) * 100;
  const imageUrl = campaign.image ? `http://localhost:5500${campaign.image}` : campaign.imageUrl;


 

  return (
    <div className="campaign-detail-container">
      <h1 className="campaign-title">{campaign.title}</h1>
      <div className="campaign-content">
        <div className="campaign-left">
          <img src={ imageUrl} alt={campaign.title} className="campaign-image" />
        </div>
        <div className="campaign-right">
          <button className="donate-button">Donate Now</button>
          <button className="share-button">Share</button>
          <div className="campaign-stats">
            <p className="raised-amount">Rs {campaign.raised.toLocaleString()}</p>
            <p className="goal-amount">Raised of Rs {campaign.goal.toLocaleString()} goal</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <p className="supporters">{campaign.donations} Supporters</p>
            <p className="days-left">{campaign.daysLeft} days left</p>
          </div>
          <div className="top-donators">
            <h3>Top Donators</h3>
            <ul>
              {campaign.donators.map((donator, index) => (
                <li key={index}>{donator}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="campaign-story">
        <div className="tabs">
          <span className="tab active">Story</span>
          <span className="tab">Update</span>
          <span className="tab">Comments</span>
        </div>
        <div className="campaign-description">
          <h2>About the Fundraiser</h2>
          <p>{campaign.description || campaign.story}</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
