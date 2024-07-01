import React from 'react';

function Checkout() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
        Checkout
      </h1>
      <p style={{ fontSize: '18px', color: '#666' }}>
        Thank you for your order!
      </p>
    </div>
  );
}

export default Checkout;