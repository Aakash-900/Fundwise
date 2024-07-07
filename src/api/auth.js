// // src/api/auth.js
// import axios from 'axios';

// const API_URL = 'http://localhost:5500/api/auth'; 
// export const signup = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/signup`, userData);
//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : new Error('Network Error');
//   }
// };

// export const login = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, userData);
//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : new Error('Network Error');
//   }
// };

// export const forgetPassword = async (email) => {
//   try {
//     const response = await axios.post(`${API_URL}/forget-password`, { email });
//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : new Error('Network Error');
//   }
// };

// src/api/auth.js

import axios from 'axios';

const API_URL = 'http://localhost:5500/api/auth'; // Change to your backend URL

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const forgetPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/forget-password`, { email });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};



