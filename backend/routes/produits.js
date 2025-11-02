// backend/routes/produits.js
const express = require("express");
const router = express.Router();
const productRoutes = require("./routes/produits/");

// ✅ Route de test : récupérer tous les produits
router.get("/", async (req, res) => {
  try {
    const produits = await Product.find();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
