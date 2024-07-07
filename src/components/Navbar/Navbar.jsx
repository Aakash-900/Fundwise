import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import imagelogo from "../../assets/logo.png";
import LoginModal from "../Login/LoginModal";
import { useUser } from "../Context/UserContext"; // Ensure correct path

const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // Added state for dropdown visibility
    const { user, logout } = useUser();
    const navigate = useNavigate();

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const handleStartCampaign = () => {
        if (user) {
            navigate('/create-campaign');
        } else {
            setModalOpen(true);
        }
    };

    return (
        <header>
            <ul className="asked">
                <li>
                    <Link to="/howitworks" className="content">How it works</Link>
                    <Link to="/FAQ">FAQ</Link>
                </li>
            </ul>
            <nav className="container">
                <Link to="/">
                    <img className="logo" src={imagelogo} alt="logo" />
                </Link>
                <ul className="menu">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/fundraiser"><li>Fundraiser</li></Link>
                    <Link to="/Allcampaign"><li>Campaign</li></Link>
                    <Link to="/Aboutus"><li>About us</li></Link>
                </ul>
                <div>
                    {user ? (
                        <div className="profile-menu" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                            <span className="profile-name">Welcome, {user.firstName}</span>
                            {showDropdown && (
                                <div className="dropdown-menu">
                                    <span className="dropdown-item" onClick={logout}>Logout</span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button onClick={toggleModal} className="btn btn-signin">Sign in</button>
                    )}
                    <button onClick={handleStartCampaign} className="btn btn-campaign">Start a Campaign</button>
                </div>
                <LoginModal isOpen={isModalOpen} onClose={toggleModal} />
            </nav>
        </header>
    );
};

export default Navbar;
