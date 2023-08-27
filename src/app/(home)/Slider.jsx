'use client'
import React from 'react';
import Typewriter from 'react-ts-typewriter';

const Slider = () => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bnV0cml0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';

  const sliderStyles = {
    minHeight: '80vh',
    backgroundImage: `url("${backgroundImageUrl}")`,
    backgroundSize: 'cover',
  };

  return (
    <div className="hero" style={sliderStyles}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-black font-bold"><Typewriter text='Tailord Diet Plans and Nutritional Advice' /></h1>
          <p className="mb-5 text-white">Get the support you need to reach your health goals with our trusted nutritionist. We offer personalized diet plans and expert nutritional advice to help you thrive.</p>
          <div className='d-flex'>
            <button className="btn btn-info mr-5">Get Started</button>
            <button className="btn btn-outline btn-secondary">Get Meal Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
