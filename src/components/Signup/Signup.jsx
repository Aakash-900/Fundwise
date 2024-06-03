import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className="signup">
    <div className="container">
      <div className="left">
        <h2>Already have an account?</h2>
        <p>Let's get you logged back</p>
        <button className="login-button">Login</button>
      </div>
      <div className="right">
        <img src="logo.png" alt="FundWise Logo" className="logo" />
        <h2>Create account</h2>
        <form className="signup-form">
          <div className="input-group">
            <input type="text" placeholder="Your first name" required />
            <input type="text" placeholder="Your last name" required />
          </div>
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
          <div className="terms">
            <input type="checkbox" required />
            <label>
              I have read, understood and agree to the <a href="#">Fund wise terms</a> and <a href="#">privacy & condition</a>
            </label>
          </div>
          <button type="submit" className="signup-button">Sign up</button>
        </form>
        <p>Or use your email for register</p>
        <div className="social-login">
          <button className="social-button google">Google</button>
          <button className="social-button twitter">Twitter</button>
          <button className="social-button facebook">Facebook</button>
        </div>
      </div>
    </div>
  </div>
);
}
 

export default Signup
