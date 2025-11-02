// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Produits from "./pages/Produits";
import Contact from "./pages/Contact";
import APropos from "./pages/APropos";
import ProductDetail from "./pages/ProductDetail";
import Panier from "./pages/Panier";
import Notification from "./components/Notification"; // 1. Importer le composant
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Notification /> {/* 2. Ajouter le composant ici */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/produits/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
