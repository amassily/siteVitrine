// src/pages/Produits.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importer le composant Link

const Produits = () => {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <h2 style={{ textAlign: "center" }}>Chargement des produits...</h2>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", color: "#007bff" }}>🛍️ Nos Produits</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        marginTop: "20px"
      }}>
        {produits.map(prod => (
          // Chaque produit est maintenant un lien cliquable
          <Link to={`/produits/${prod._id}`} key={prod._id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "15px",
              width: "220px",
              height: "100%", // Pour que toutes les cartes aient la même hauteur
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
              backgroundColor: "#ffffff"
            }}
            onMouseEnter={e => { e.currentTarget.style.transform="scale(1.05)"; e.currentTarget.style.boxShadow="0 6px 15px rgba(0,0,0,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 4px 10px rgba(0,0,0,0.1)"; }}
            >
              <img src={prod.image} alt={prod.nom} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }} />
              <h3 style={{ margin: "10px 0 5px 0" }}>{prod.nom}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>{prod.description}</p>
              <p style={{ fontWeight: "bold", color: "#28a745" }}>{prod.prix} FCFA</p>
              <span style={{
                display: "inline-block",
                padding: "5px 10px",
                backgroundColor: "#ffc107",
                borderRadius: "15px",
                fontSize: "12px"
              }}>{prod.categorie}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Produits;
