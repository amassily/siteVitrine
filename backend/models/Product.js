const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String, required: true },
  prix: { type: Number, required: true },
  image: { type: String, required: true },
  categorie: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
