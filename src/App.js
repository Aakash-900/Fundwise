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

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CreateCampaignPage from "./pages/CreateCampaign/CreateCampaignPage";
import Allcampaign from "./pages/Allcampaign/Allcampaign";
import FAQpage from "./pages/FQApage/FAQpage";
import ContactUs from "./pages/Contactpage/ContactUs";
import Howitworkspage from "./pages/Howitworkpage/howitworkspage";
import Aboutuspage from "./pages/Aboutuspage/Aboutuspage";
import ResetPassword from "./components/Restpassword/ResetPassword";
import { UserProvider, useUser } from './components/Context/UserContext';
import CampaignDetailPage from './pages/CampaignDetails/CampaignDetailPage';
import AdminDashboard from './pages/AdminDasboard/Admin/AdminDasboard';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const AuthManager = () => {
  const { setUser } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5500/api/auth/validate-token', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        if (response.data && response.data.user) {
          setUser(response.data.user);
        } else {
          localStorage.removeItem('token');
          localStorage.removeItem('role');
        }
      })
      .catch(error => {
        console.error("Token validation failed:", error.response ? error.response.data : error.message);
        localStorage.removeItem('token');
        localStorage.removeItem('role');
      })
      .finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [setUser]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while fetching user data
  }

  return null; // This component does not render anything
};

const App = () => {
  const { user, setUser } = useUser();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setUser(null);
    toast.success('Successfully logged out!'); // Show success notification
  };

  // Determine if the current route is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      <AuthManager /> {/* This will manage authentication state */}
      {!isAdminRoute && <Navbar />} {/* Conditionally render Navbar */}
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-campaign" element={<CreateCampaignPage />} />
        <Route path="/Allcampaign" element={<Allcampaign />} />
        <Route path="/FAQ" element={<FAQpage />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/howitworks" element={<Howitworkspage />} />
        <Route path="/Aboutus" element={<Aboutuspage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/reset/:token" element={<ResetPassword />} />
        <Route path="/admin/*" element={<AdminDashboard onLogout={handleLogout} />} />
        <Route path="/campaign/:id" element={<CampaignDetailPage />} />
      </Routes>
      {!isAdminRoute && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
};

const AppWrapper = () => (
  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>
);

export default AppWrapper;
