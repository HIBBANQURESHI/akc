import React from 'react';

const HeroSection = () => {
  return (
    <div style={styles.heroContainer}>
      <div style={styles.content}>
        <h2 style={styles.subtitle}>Amplify Your Ecommerce by</h2>
        <h1 style={styles.title}>Amazon, Walmart & Shopify stores with Ecom Experts</h1>
        <button style={styles.button} onMouseOver={hoverEffect} onMouseOut={normalEffect}>
          Book a Free Consultation
        </button>
      </div>
      <div style={styles.imageContainer} className='mb-8'>
        <img
          src="/src/assets/banner/ecomhero.png"
          alt="Ecom Expert"
          style={styles.image}
        />
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
  e.target.style.backgroundColor = '#FBC02D';
  e.target.style.color = '#000';
  e.target.style.border = 'none';
};

const styles = {
  heroContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: '10px',
    borderRadius: '',
    backgroundImage: 'url(/src/assets/banner/ecom.png)',
    backgroundSize: 'cover',
    flexWrap: 'wrap', // Ensure wrapping on smaller screens
  },
  content: {
    maxWidth: '600px',
    color: '#fff',
    margin: '110px',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: 'normal',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#f9a825',
    color: '#000',
    border: 'none',
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: '0.3s',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px', // Adds spacing for smaller screens
  },
  image: {
    width: '100%',
    maxWidth: '350px',
    height: 'auto',
    borderRadius: '5px',
  },

  // Media Queries
  '@media (max-width: 768px)': {
    heroContainer: {
      flexDirection: 'column',
      padding: '20px',
    },
    content: {
      margin: '20px',
      textAlign: 'center', // Center text on smaller screens
    },
    subtitle: {
      fontSize: '20px',
    },
    title: {
      fontSize: '28px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
    },
  },
  '@media (max-width: 480px)': {
    content: {
      margin: '10px',
    },
    title: {
      fontSize: '24px',
    },
    subtitle: {
      fontSize: '18px',
    },
    button: {
      fontSize: '14px',
      padding: '8px 15px',
    },
  },
};

export default HeroSection;
