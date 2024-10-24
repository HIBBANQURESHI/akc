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
    }, 5000); // Show form after 5 seconds

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
            height:'75%',
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
          <h1 style={{ marginBottom: '20px', fontWeight: '600', fontSize: '24px' }} className='text-yellow-400 font-bold text-2xl'>Contact Us</h1>
          <p style={{ marginBottom: '20px', fontSize: '16px' }} className='text-yellow-400 font-semibold py-6 text-md'>For more information, please complete this form.</p>
          <form action="">
            <div className="form-group" style={{ marginBottom: '19px' }}>
              <label style={{ fontWeight: '600', marginBottom: '5px' }} className='text-white'>Name</label>
              <input type="text" className="form-control" style={{
                backgroundColor: 'black',
                color: '#fff',
                border: '1px solid #f9a825',
                padding: '5px',
                width: '100%',
                borderRadius: '15px',
                fontSize: '16px',
              }} />
            </div>
            <div className="form-group" style={{ marginBottom: '15px', marginTop: '50px', }}>
              <label style={{ fontWeight: '600', marginBottom: '5px' }} className='text-white'>E-Mail Address</label>
              <input type="text" className="form-control" style={{
                backgroundColor: 'black',
                color: '#fff',
                border: '1px solid #f9a825',
                padding: '5px',
                width: '100%',
                borderRadius: '15px',
                marginTop: '30px',
                fontSize: '16px',
              }} />
            </div>
            <div className="form-group" style={{ marginBottom: '15px', marginTop: '50px',}}>
              <label style={{ fontWeight: '600', marginBottom: '5px' }} className='text-white'>Phone Number</label>
              <input type="text" className="form-control" style={{
                backgroundColor: 'black',
                color: '#fff',
                border: '1px solid #f9a825',
                padding: '5px',
                width: '100%',
                borderRadius: '15px',
                marginTop: '30px',
                fontSize: '16px',
              }} />
            </div>
            <button
              type="submit"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                backgroundColor: isHovered ? 'white' : '', // Change background on hover
                color: isHovered ? 'black' : 'black', // Change text color on hover
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                marginTop: '50px',
                marginLeft: '10px',
                transition: 'background-color 0.3s, color 0.3s', // Smooth transition
              }}
              className='font-semibold bg-yellow-500 w-96 px-10'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
