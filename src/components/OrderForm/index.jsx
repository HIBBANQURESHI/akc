import React, { useState } from 'react';

const OrderForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return ( 
    <div className="order-form-container" style={styles.orderFormContainer}>
      <h2 className="form-title" style={styles.formTitle}>Subscribe Now and Get</h2>
      <h2 className="form-title" style={styles.formTitle}>Special Discount on all</h2>
      <h1 className="form-heading" style={styles.formHeading}>Digital Services</h1>
      <h1 className="form-heading" style={styles.formHeading}>Free Sign Up</h1>
      <p className="form-text" style={styles.formText}>Sign Up now to avail this amazing discount</p>
      <form className="order-form" onSubmit={handleSubmit} style={styles.orderForm}>
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="name" className="form-label" style={styles.formLabel}>Name:</label>
          <input type="text" id="name" name="name" className="form-input" style={styles.formInput} required />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="email" className="form-label" style={styles.formLabel}>Email:</label>
          <input type="email" id="email" name="email" className="form-input" style={styles.formInput} required />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="phone" className="form-label" style={styles.formLabel}>Phone Number:</label>
          <input type="tel" id="phone" name="phone" className="form-input" style={styles.formInput} required />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="project" className="form-label" style={styles.formLabel}>Talk about your project:</label>
          <textarea id="project" name="project" className="form-textarea" style={styles.formTextarea} required />
        </div>
        <button type="submit" className="place-order-button" style={styles.placeOrderButton}>Place Order</button>
        <p className="limited-offer-text" style={styles.limitedOfferText}>* Limited Offer</p>
      </form>

      {showPopup && (
        <div className="popup-overlay" style={styles.popupOverlay}>
          <div className="popup-content" style={styles.popupContent}>
            <span className="close-popup" onClick={() => setShowPopup(false)} style={styles.closePopup}>&times;</span>
            <p className="popup-message" style={styles.popupMessage}>Your order has been placed, our agent will contact you in 24 hours.</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  orderFormContainer: {
    color: '#FFD700',
    padding: '20px',
    borderRadius: '8px',
    width: '1240px',
    height: '174px',
    margin: '100px auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    position:'relative'
  },
  formTitle: {
    textAlign: 'center',
    margin: 'auto 0',
    fontWeight: 'bold',
    fontSize: '15px'
  },
  formHeading: {
    fontSize: '35px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '5px 0',
    color:'#FFF'
  },
  formText: {
    textAlign: 'center',
    margin: '5px 0',
    color:'#FFF',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  orderForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGroup: {
    width: '200%',
    marginBottom: '15px',
  },
  formLabel: {
    display: 'block',
    marginBottom: '5px',
  },
  formInput: {
    width: '100%',
    padding: '10px',
    border: '2px solid #FFD700',
    borderRadius: '4px',
    backgroundColor: '#000',
    color: '#FFD700',
  },
  formTextarea: {
    width: '100%',
    padding: '10px',
    border: '2px solid #FFD700',
    borderRadius: '4px',
    backgroundColor: '#000',
    color: '#FFD700',
    height: '100px',
  },
  placeOrderButton: {
    backgroundColor: '#FFD700',
    color: '#000',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  limitedOfferText: {
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '10px',
  },
  popupOverlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '9999',
  },
  popupContent: {
    backgroundColor: '#FFD700',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '400px',
  },
  popupMessage: {
    color: '#000',
    fontSize: '25px',
    margin: '0',
    fontWeight: 'bold',
  },
  closePopup: {
    position: 'absolute',
    top: '15px', // Move it closer to the top of the modal
    right: '15px', // Adjust if you want it closer to the right side as well
    fontSize: '24px',
    cursor: 'pointer',
  },
};


export default OrderForm;
