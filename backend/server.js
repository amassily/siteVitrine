// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require("./routes/products");
app.use("/api/produits", productRoutes);

// --- DEBOGAGE ---
console.log("Variable d'environnement MONGO_URL reçue :", process.env.MONGO_URL);
// ----------------

// Connexion MongoDB
const mongoURL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/site_vitrine";

mongoose.connect(mongoURL)
  .then(() => console.log(`✅ Connecté à MongoDB`))
  .catch(err => console.error("❌ Erreur MongoDB :", err));

// Démarrage serveur
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
