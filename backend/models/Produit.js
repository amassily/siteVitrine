const mongoose = require("mongoose");

// ✅ Schéma du produit
const produitSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: false // facultatif
  },
  categorie: {
    type: String,
    default: "Général"
  }
}, { timestamps: true });

module.exports = mongoose.model("Produit", produitSchema);
