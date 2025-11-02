// src/components/Notification.js
import React from 'react';
import { useCart } from '../context/CartContext';

const Notification = () => {
  const { notification } = useCart();

  if (!notification) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#28a745',
      color: 'white',
      padding: '12px 25px',
      borderRadius: '8px',
      zIndex: 1000, // Pour s'assurer qu'elle est au-dessus des autres éléments
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      fontSize: '16px'
    }}>
      {notification}
    </div>
  );
};

export default Notification;
