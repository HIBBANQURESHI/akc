import React, { useState } from 'react';
import { FaAmazon, FaShopify, FaEtsy } from 'react-icons/fa';
import { SiWalmart } from 'react-icons/si';

const servicesData = {
  Amazon: [
    { icon: <FaAmazon />, title: 'Amazon Store Creation' },
    { icon: <FaAmazon />, title: 'Amazon FBA Automation' },
    { icon: <FaAmazon />, title: 'Amazon Private Labelled' },
    { icon: <FaAmazon />, title: 'Amazon A+ Content' },
    { icon: <FaAmazon />, title: 'Amazon Product Hunting' },
    { icon: <FaAmazon />, title: 'Amazon PPC' }
  ],
  Walmart: [
    { icon: <SiWalmart className='text-4xl'/>, title: 'Walmart Store Creation' },
    { icon: <SiWalmart />, title: 'Walmart Private labelled' },
    { icon: <SiWalmart />, title: 'Walmart Dropshipping' },
    {icon: <SiWalmart />, title: 'Walmart Product Hunting'},
    {icon: <SiWalmart />, title: 'Walmart WFS'},
  ],
  Shopify: [
    { icon: <FaShopify />, title: 'Shopify Store Creation' },
    { icon: <FaShopify />, title: 'Shopify Automation' },
    { icon: <FaShopify />, title: 'Shopify Store Optimization' },
    { icon: <FaShopify />, title: 'Shopify Product Hunting' },
    { icon: <FaShopify />, title: 'Shopify Store Marketing' },
  ],
  Etsy: [
    { icon: <FaEtsy />, title: 'Etsy Store Creation' },
    { icon: <FaEtsy />, title: 'Etsy Automation' },
    { icon: <FaEtsy />, title: 'Etsy Store Optimization' },
    { icon: <FaEtsy />, title: 'Etsy Product Hunting' },
    { icon: <FaEtsy />, title: 'Etsy Store Marketing' },
  ],
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('Amazon');

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Services</h2>
      <h3 style={styles.subtitle}>Making brand sales effortless!</h3>
      <button
        style={styles.consultationButton}
        onMouseOver={hoverEffect}
        onMouseOut={normalEffect}
      >
        Book a Free Consultation
      </button>
      <div style={styles.tabs}>
        {Object.keys(servicesData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={activeTab === tab ? styles.activeTab : styles.tab}
            onMouseOver={hoverEffect2}
            onMouseOut={normalEffect2}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={styles.servicesGrid}>
        {servicesData[activeTab].map((service, index) => (
          <div 
            key={index} 
            style={styles.serviceCard}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#F9A825'} // Hover effect
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'} // Normal state
          >
            <div style={styles.icon}>{service.icon}</div>
            <h4 style={styles.serviceTitle}>{service.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

// Hover effect functions
const hoverEffect = (e) => {
  e.target.style.backgroundColor = 'transparent';
  e.target.style.color = '#fff';
  e.target.style.border = '2px solid #F9A825';
};

const normalEffect = (e) => {
  e.target.style.backgroundColor = '#ffcc00';
  e.target.style.color = '#000';
  e.target.style.border = 'none';
};

// Hover effect functions for tabs
const hoverEffect2 = (e) => {
  e.target.style.backgroundColor = '#ffcc00';
  e.target.style.color = '#000';
  e.target.style.border = '2px solid #F9A825';
};

const normalEffect2 = (e) => {
  e.target.style.backgroundColor = '#333';
  e.target.style.color = '#fff';
  e.target.style.border = 'none';
};

const styles = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '60px 20px', // Adjusted for better responsiveness
    textAlign: 'center',
    backgroundImage: 'url(/src/assets/banner/ecomservice.jpg)',
    backgroundSize: 'cover',
    marginTop: '',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: 'normal',
    marginBottom: '20px',
  },
  consultationButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '40px',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: '0.3s',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  tab: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    margin: '0 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'bold',
    transition: '0.3s',
  },
  activeTab: {
    backgroundColor: '#ffcc00',
    color: '#000',
    padding: '10px 20px',
    margin: '0 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'bold',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Responsive grid layout
    gap: '20px',
    justifyItems: 'center',
  },
  serviceCard: {
    backgroundColor: '#333',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    color: '#fff',
    width: '100%', // Make width responsive
    maxWidth: '380px', // Limit the max width
    height: '185px',
    transition: 'background-color 0.3s', // Smooth transition for hover effect
  },
  icon: {
    fontSize: '40px',
    marginBottom: '10px',
  },
  serviceTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
  },

  // Responsive styles
  '@media (max-width: 768px)': {
    title: {
      fontSize: '28px',
    },
    subtitle: {
      fontSize: '20px',
    },
    consultationButton: {
      fontSize: '16px',
      padding: '12px 25px',
    },
    tab: {
      padding: '8px 15px',
    },
    activeTab: {
      padding: '8px 15px',
    },
    icon: {
      fontSize: '35px',
    },
    serviceTitle: {
      fontSize: '16px',
    },
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '24px',
    },
    subtitle: {
      fontSize: '18px',
    },
    consultationButton: {
      fontSize: '14px',
      padding: '10px 20px',
    },
    tab: {
      padding: '6px 12px',
    },
    activeTab: {
      padding: '6px 12px',
    },
    icon: {
      fontSize: '30px',
    },
    serviceTitle: {
      fontSize: '14px',
    },
  },
};

export default ServicesSection;
