// src/api/campaigns.js
import axios from 'axios';

const API_URL = 'http://localhost:5500/api/campaigns';

export const createCampaign = async (campaignData) => {
  try {
    const response = await axios.post(`${API_URL}/create`, campaignData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const fetchCampaigns = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};
