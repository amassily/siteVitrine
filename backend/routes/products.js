const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET /api/produits (tous les produits)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/produits/:id (un seul produit)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product == null) {
      // Si le produit n'est pas trouvé, renvoyer une erreur 404
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
