import React from 'react'
import './Hero.css'
import watch_img from '../../assets/watch-icon.svg';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <h1> <span className='hero-text-color'> Happiness</span> comes from <span className='hero-text-color'>your action</span></h1>
            <p>Be a part of the breakthrough and make someone's dream come true.</p>
            <div className='hero-btn'>
            <button className='btn-donate'>Donate now</button>
            <button className='btn-watch'> <img src={watch_img} alt="btn-img" />Watch video </button>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
