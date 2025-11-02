// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // 1. Importer useCart

const Navbar = () => {
  const { cartItems } = useCart(); // 2. Accéder aux articles du panier

  // 3. Calculer le nombre total d'articles (en comptant les quantités)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#007bff",
      color: "white"
    }}>
      <h2 style={{ margin: 0 }}>✨ Mon Site Vitrine</h2>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px", textDecoration: "none" }}>Accueil</Link>
        <Link to="/produits" style={{ color: "white", marginRight: "20px", textDecoration: "none" }}>Produits</Link>
        <Link to="/a-propos" style={{ color: "white", marginRight: "20px", textDecoration: "none" }}>À Propos</Link>
        <Link to="/contact" style={{ color: "white", marginRight: "20px", textDecoration: "none" }}>Contact</Link>
        
        {/* 4. Lien vers le panier avec le compteur */}
        <Link to="/panier" style={{ color: "white", textDecoration: "none", position: 'relative' }}>
          Panier
          {totalItems > 0 && (
            <span style={{
              position: 'absolute',
              top: '-10px',
              right: '-20px',
              backgroundColor: '#ffc107',
              color: '#333',
              borderRadius: '50%',
              padding: '2px 8px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
