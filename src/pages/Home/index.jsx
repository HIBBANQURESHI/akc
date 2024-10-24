import React, { useState, useEffect } from 'react';
import Layout from '../../layout';
import HeroSection from './sections/Hero';
import BrandSection from './sections/Brand';
import CallToAction from './sections/CallToAction';
import ServicesSection from './sections/Services';
import ProjectSection from './sections/Projects';

const Home = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormVisible(true);
    }, 3000); // Show form after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const closeForm = (e) => {
    if (e.target.className === 'form-popup-bg' || e.target.id === 'btnCloseForm') {
      setFormVisible(false);
    }
  };

  return (
    <Layout>
      <HeroSection />
      <BrandSection />
      <CallToAction />
      <ServicesSection />
      <ProjectSection />

     {/* Popup Form */}
<div
  className={`form-popup-bg ${formVisible ? 'is-visible' : ''}`}
  onClick={closeForm}
  style={{
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    opacity: formVisible ? 1 : 0,
    visibility: formVisible ? 'visible' : 'hidden',
    transition: 'opacity 0.3s, visibility 0s 0.3s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000,
  }}
>
  <div
    className="form-container"
    style={{
      backgroundColor: 'black',
      borderRadius: '8px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '75%',
      maxWidth: '500px',
      padding: '40px',
      color: '#333',
      position: 'relative',
      fontFamily: 'Roboto, sans-serif',
    }}
  >
    <button id="btnCloseForm" className="close-button" style={{
      background: 'none',
      color: 'white',
      width: '40px',
      height: '40px',
      position: 'absolute',
      top: '10px',
      right: '10px',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
    }}>
      &times;
    </button>
    <h1 style={{ marginBottom: '20px', fontWeight: '750', fontSize: '40px' }} className='text-white'>Get a Free Quote</h1>
    <p style={{ marginBottom: '20px', fontSize: '16px' }} className='text-gray-400 font-semibold py-3 text-md'>Fill out the form below and we’ll be in touch to discuss your project.</p>
    <form action="">
    <div className="form-group" style={{ marginBottom: '15px' }}>
  <label style={{ fontWeight: '600', display: 'block' }} className='text-gray-800'></label>
  <input
    type="text"
    className="form-control"
    style={{
      backgroundColor: 'black',
      color: '#fff',
      border: 'none',
      borderBottom: '2px solid #718096', // Single underline
      width: '100%',
      borderRadius: '0', // Remove rounded edges
      fontSize: '16px',
      outline: 'none',
      padding: '5px 0',
      transition: 'border-color 0.3s ease-in-out', // Add smooth transition
    }}
    placeholder="Your Name" // Add placeholder for clarity
  />
      </div>
      <div className="form-group" style={{ marginBottom: '15px', marginTop: '30px' }}>
  <label style={{ fontWeight: '600', marginBottom: '5px', display: 'block' }} className='text-gray-800'></label>
  <input
    type="text"
    className="form-control"
    style={{
      backgroundColor: 'black',
      color: '#fff',
      border: 'none',
      borderBottom: '2px solid #718096', // Single underline
      width: '100%',
      borderRadius: '0', // Remove rounded edges
      fontSize: '16px',
      outline: 'none',
      padding: '5px 0',
      transition: 'border-color 0.3s ease-in-out', // Add smooth transition
    }}
    placeholder="Your Email Address" // Add placeholder for clarity
  />
</div>
<div className="form-group" style={{ marginBottom: '15px', marginTop: '30px' }}>
  <label style={{ fontWeight: '600', marginBottom: '5px', display: 'block' }} className='text-gray-800'></label>
  <input
    type="text"
    className="form-control"
    style={{
      backgroundColor: 'black',
      color: '#fff',
      border: 'none',
      borderBottom: '2px solid #718096', // Single underline
      width: '100%',
      borderRadius: '0', // Remove rounded edges
      fontSize: '16px',
      outline: 'none',
      padding: '5px 0',
      transition: 'border-color 0.3s ease-in-out', // Add smooth transition
    }}
    placeholder="Your Phone Number" // Add placeholder for clarity
  />
</div>
      <button
        type="submit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? 'black' : '#f9a825', // Change background on hover
          color: isHovered ? '#f9a825' : 'black', // Change text color on hover
          padding: '10px 20px',
          border: isHovered ? '2px solid #f9a825' : 'none', // Border when hovered
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          marginTop: '30px',
          marginLeft: '10px',
          transition: 'background-color 0.3s, color 0.3s, border 0.3s', // Smooth transition for border too
        }}
        className='font-semibold bg-yellow-500 w-96 px-10'
      >
        Submit
      </button>
      <div className='py-8 text-left text-gray-700 text-sm'>Disclaimer: By providing a telephone number and submitting this form, you are consenting to be contacted by SMS text message. Message &amp; data rates may apply. You can reply STOP to opt-out of further messaging.</div>
    </form>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
