import React, { useEffect, useState } from "react";

function Produits() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/produits")
      .then((res) => res.json())
      .then((data) => setProduits(data))
      .catch((err) => console.error("Erreur API:", err));
  }, []);

  return (
    <div>
      <h1>Nos Produits</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {produits.map((p) => (
          <div key={p._id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h3>{p.nom}</h3>
            <p>{p.description}</p>
            <p><b>{p.prix} FCFA</b></p>
            {p.image && <img src={p.image} alt={p.nom} width="100" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produits;
