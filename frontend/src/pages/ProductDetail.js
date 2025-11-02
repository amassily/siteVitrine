// src/pages/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // 1. Importer useCart

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // 2. Obtenir la fonction addToCart

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`http://localhost:5001/api/produits/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Produit non trouvé');
        }
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Chargement du produit...</h2>;
  if (error) return <h2 style={{ textAlign: "center", color: 'red' }}>Erreur : {error}</h2>;
  if (!product) return <h2 style={{ textAlign: "center" }}>Produit non trouvé.</h2>;

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto' }}>
      <button 
        onClick={handleBack} 
        style={{
          marginBottom: '25px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          transition: 'background-color 0.2s'
        }}
      >
        &larr; Retour
      </button>

      <img src={product.image} alt={product.nom} style={{ width: '100%', borderRadius: '15px' }} />
      <h1 style={{ marginTop: '20px' }}>{product.nom}</h1>
      <p style={{ fontSize: '18px', color: '#555' }}>{product.description}</p>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>{product.prix} FCFA</p>
      
      {/* 3. Bouton pour ajouter au panier */}
      <button 
        onClick={() => addToCart(product)} 
        style={{
          marginTop: '20px',
          padding: '12px 25px',
          fontSize: '18px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          transition: 'background-color 0.2s'
        }}
      >
        Ajouter au panier
      </button>

      <span style={{
        display: 'inline-block',
        padding: '8px 15px',
        backgroundColor: '#ffc107',
        borderRadius: '20px',
        fontSize: '16px',
        marginLeft: '20px' // Ajout d'une marge
      }}>
        Catégorie : {product.categorie}
      </span>
    </div>
  );
};

export default ProductDetail;
