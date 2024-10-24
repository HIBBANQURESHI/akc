import React from 'react';
import { FaUsers, FaShareAlt, FaComments } from 'react-icons/fa';

function SMMExpertise() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f9a825',
        height: '351.59px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#f9a825',
          opacity: 0.5,
          zIndex: 0,
        }}
      ></div>
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <FaUsers color="black" size="30px" />
        <h2 style={{ fontSize: '24px', marginBottom: '5px', color: 'black' }}>
          Community Engagement
        </h2>
        <p style={{ fontSize: '16px', color: 'black' }}>
          We connect with your audience through engaging content and meaningful interactions, fostering a loyal community around your brand.
        </p>
      </div>
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <FaShareAlt color="black" size="30px" />
        <h2 style={{ fontSize: '24px', marginBottom: '5px', color: 'black' }}>
          Content Sharing Strategy
        </h2>
        <p style={{ fontSize: '16px', color: 'black' }}>
          Our team develops tailored content sharing strategies that maximize your reach and enhance your brand visibility across various platforms.
        </p>
      </div>
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <FaComments color="black" size="30px" />
        <h2 style={{ fontSize: '24px', marginBottom: '5px', color: 'black' }}>
          Real-Time Feedback
        </h2>
        <p style={{ fontSize: '16px', color: 'black' }}>
          We monitor audience feedback in real time, allowing us to adapt your strategy for optimal engagement and effectiveness.
        </p>
      </div>
    </div>
  );
}

export default SMMExpertise;
