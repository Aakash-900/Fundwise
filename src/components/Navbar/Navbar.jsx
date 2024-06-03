import React from "react";
import "./Navbar.css";
import imagelogo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <ul className="asked">
        <li>
          <a className="content" href="#">
            How it works
          </a>
          <a href="#">FAQ</a>
        </li>
      </ul>
      <nav className="container">
        <a href="#">
          <img className="logo" src={imagelogo} alt="logo" />
        </a>
        <ul className="menu">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Fundraiser</li>
          </a>
          <a href="#">
            <li>Campaign</li>
          </a>
          <a href="#">
            <li>About us</li>
          </a>
        </ul>
        <div>
          <a href="#">
            <button className="btn-signin">Sign in</button>
          </a>
          <a href="#">
            <button className="btn-campaign">Start an Campaign</button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
