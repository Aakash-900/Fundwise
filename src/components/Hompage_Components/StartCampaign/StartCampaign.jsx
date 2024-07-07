import React from 'react';
import './StartCampaign.css';
import StartFundImage from '../../../assets/StartFundImage.png'; // Add the illustration image

const StartCampaign = () => {
  return (
    <div className="start-campaign">
      <div className="content">
        <h2>Start one today!</h2>
        <p>People everywhere are empowered to start campaigns, mobilize supporters, and work with Decision Makers to drive solutions.</p>
        <button className="start-campaign-button">Start a campaign</button>
      </div>
      <div className="illustration">
        <img src={StartFundImage} alt="Illustration" />
      </div>
    </div>
  );
};

export default StartCampaign;
