// src/pages/Panier.js
import React, { useState } from 'react'; // Importer useState
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Panier = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [orderSuccess, setOrderSuccess] = useState(false); // État pour le message de succès

  const total = cartItems.reduce((acc, item) => acc + item.prix * item.quantity, 0);

  const handleOrder = () => {
    // Ici, on pourrait appeler une API pour traiter la commande.
    // Pour l'instant, on simule le succès.
    clearCart(); // Vider le panier
    setOrderSuccess(true); // Afficher le message de succès
  };

  // Si la commande est un succès, afficher le message
  if (orderSuccess) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2 style={{ color: '#28a745' }}>✓ Commande passée avec succès !</h2>
        <p>Merci pour votre confiance.</p>
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>
          &larr; Retour à l'accueil
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Votre panier est vide.</h2>
        <Link to="/produits" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>
          &larr; Continuer mes achats
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: 'auto' }}>
      <h1>Votre Panier</h1>
      {cartItems.map(item => (
        <div key={item._id} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #ddd',
          padding: '20px 0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={item.image} alt={item.nom} style={{ width: '80px', marginRight: '20px' }} />
            <div>
              <h3 style={{ margin: 0 }}>{item.nom}</h3>
              <p>Quantité : {item.quantity}</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ fontWeight: 'bold', marginRight: '20px' }}>{(item.prix * item.quantity).toFixed(2)} FCFA</p>
            <button onClick={() => removeFromCart(item._id)} style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '5px 10px',
              cursor: 'pointer'
            }}>
              Supprimer
            </button>
          </div>
        </div>
      ))}
      <div style={{ textAlign: 'right', marginTop: '30px' }}>
        <h2 style={{ fontWeight: 'bold' }}>Total : {total.toFixed(2)} FCFA</h2>
        {/* Appeler handleOrder au clic */}
        <button onClick={handleOrder} style={{
          padding: '15px 25px',
          fontSize: '18px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Passer la commande
        </button>
      </div>
    </div>
  );
};

export default Panier;
