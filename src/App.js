// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import { UserProvider } from "../src/components/Context/UserContext"; // Adjust path as needed
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home/Home";
// import Fundraiser from "./pages/Fundraiserpage/Fundraiser";
// import CreateCampaignPage from "./pages/CreateCampaign/CreateCampaignPage";
// import Allcampaign from "./pages/Allcampaign/Allcampaign";
// import FAQpage from "./pages/FQApage/FAQpage";
// import ContactUs from "./pages/Contactpage/ContactUs";
// import Howitworkspage from "./pages/Howitworkpage/howitworkspage";
// import Aboutuspage from "./pages/Aboutuspage/Aboutuspage";
// import ResetPassword from "./components/Restpassword/ResetPassword";

// function App() {
//   return (
    
//       <Router>
//         <div className="app">
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/fundraiser" element={<Fundraiser />} />
//             <Route path="/create-campaign" element={<CreateCampaignPage />} />
//             <Route path="/Allcampaign" element={<Allcampaign />} />
//             <Route path="/FAQ" element={<FAQpage />} />
//             <Route path="/Contact" element={<ContactUs />} />
//             <Route path="/howitworks" element={<Howitworkspage />} />
//             <Route path="/Aboutus" element={<Aboutuspage />} />
//             <Route path="/reset/:token" element={<ResetPassword />} />
//           </Routes>
//           <Footer />
//         </div>
//       </Router>
    
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Fundraiser from "./pages/Fundraiserpage/Fundraiser";
import CreateCampaignPage from "./pages/CreateCampaign/CreateCampaignPage";
import Allcampaign from "./pages/Allcampaign/Allcampaign";
import FAQpage from "./pages/FQApage/FAQpage";
import ContactUs from "./pages/Contactpage/ContactUs";
import Howitworkspage from "./pages/Howitworkpage/howitworkspage";
import Aboutuspage from "./pages/Aboutuspage/Aboutuspage";
import ResetPassword from "./components/Restpassword/ResetPassword";
import { UserProvider, useUser } from './components/Context/UserContext';
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard';
import CampaignDetailPage from './pages/CampaignDetails/CampaignDetailPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AuthManager = () => {
  const { setUser } = useUser();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/auth/validate-token', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        if (response.data && response.data.valid) {
          setUser(response.data.user);
        } else {
          localStorage.removeItem('token');
        }
      })
      .catch(error => {
        console.error("Token validation failed:", error.response ? error.response.data : error.message);
        localStorage.removeItem('token');
      });
    }
  }, [setUser]);

  return null; // This component does not render anything
};

function App() {
  return (
    <UserProvider>
      <Router>
        <AuthManager /> {/* This will manage authentication state */}
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fundraiser" element={<Fundraiser />} />
          <Route path="/create-campaign" element={<CreateCampaignPage />} />
          <Route path="/Allcampaign" element={<Allcampaign />} />
          <Route path="/FAQ" element={<FAQpage />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/howitworks" element={<Howitworkspage />} />
          <Route path="/Aboutus" element={<Aboutuspage />} />
          <Route path="/reset/:token" element={<ResetPassword />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/campaign/:id" element={<CampaignDetailPage />} /> 
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;


