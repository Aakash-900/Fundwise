// import React, { useEffect, useState } from 'react';
// import './verifyEmail.css'
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const VerifyEmail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [verificationStatus, setVerificationStatus] = useState('Verifying...');

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const token = queryParams.get('token');

//     if (token) {
//       axios.get(`/api/auth/verify-email?token=${token}`)
//         .then(response => {
//           setVerificationStatus('Email verified successfully!');
//           toast.success(response.data.msg);
//           navigate('/login');
//         })
//         .catch(error => {
//           setVerificationStatus('Email verification failed.');
//           toast.error('Email verification failed');
//         });
//     }
//   }, [location, navigate]);

//   return (
//     <div className="verification-container">
//       <h2>{verificationStatus}</h2>
//     </div>
//   );
// };

// export default VerifyEmail;
