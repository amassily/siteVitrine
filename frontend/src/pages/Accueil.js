// src/pages/Accueil.js
import React, { useEffect, useState } from "react";
import "./Accueil.css"; // pour le style et animations
import { useCart } from "../context/CartContext"; // 1. Importer useCart

const Accueil = () => {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // 2. Obtenir la fonction addToCart

  useEffect(() => {
    fetch("http://localhost:5001/api/produits")
      .then(res => res.json())
      .then(data => {
        setProduits(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Chargement ...</h2>;

  // Extraire les catégories uniques pour organiser par section
  const categories = [...new Set(produits.map(p => p.categorie))];

  return (
    <div className="accueil-container">
      {/* Carrousel simple */}
      <div className="carousel">
        {produits.slice(0,3).map(prod => (
          <div key={prod._id} className="carousel-item">
            <img src={prod.image} alt={prod.nom} />
            <div className="carousel-caption">
              <h2>{prod.nom}</h2>
              {/* Ligne du prix supprimée ici */}
            </div>
          </div>
        ))}
      </div>

      {/* Sections par catégorie */}
      {categories.map(cat => (
        <div key={cat} className="category-section">
          <h2>{cat}</h2>
          <div className="products-grid">
            {produits.filter(p => p.categorie === cat).map(prod => (
              <div key={prod._id} className="product-card">
                <img src={prod.image} alt={prod.nom} />
                <h3>{prod.nom}</h3>
                <p className="description">{prod.description}</p>
                <p className="price">{prod.prix} FCFA</p>
                {/* 3. Appeler addToCart au clic */}
                <button className="btn-add" onClick={() => addToCart(prod)}>
                  Ajouter au panier
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accueil;
