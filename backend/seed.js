const mongoose = require("mongoose");
const Product = require("./models/Product");

// --- DEBOGAGE ---
console.log("(Seed) Variable d'environnement MONGO_URL reçue :", process.env.MONGO_URL);
// ----------------

// Utilise la variable d'environnement MONGO_URL de Docker si elle existe,
// sinon, utilise l'adresse locale par défaut.
const mongoURL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/site_vitrine";

// ✅ Connexion à MongoDB
mongoose.connect(mongoURL)
  .then(() => {
    console.log("✅ (Seed) Connecté à MongoDB");
    return seedProduits();
  })
  .catch(err => {
    console.error("❌ (Seed) Erreur MongoDB :", err);
    // Important : fermer la connexion même en cas d'erreur pour ne pas bloquer le script
    mongoose.connection.close();
  });

// ✅ Fonction pour insérer des produits
async function seedProduits() {
  try {
    await Product.deleteMany(); // Nettoyer la collection avant d’ajouter
    console.log("🧹 Collection produits vidée");

    const produits = [
      {
        nom: "Chaise Moderne",
        description: "Chaise design en bois clair, idéale pour le salon.",
        prix: 12000,
        image: "https://th.bing.com/th/id/OIP.l6rWn0hNmbWcC4MtxovtDAHaHa?w=178&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        categorie: "Mobilier"
      },
      {
        nom: "Lampe de Bureau",
        description: "Lampe LED élégante avec intensité réglable.",
        prix: 8500,
        image: "https://th.bing.com/th/id/OIP.aNZunUedQYvF9ZJ8KwZUcgHaHa?w=195&h=195&c=7&r=0&o=7&pid=1.7&rm=3",
        categorie: "Éclairage"
      },
      {
        nom: "Table Basse Scandinave",
        description: "Table basse en bois et métal, style nordique.",
        prix: 24000,
        image: "https://th.bing.com/th/id/OIP.ub_3WCOP1F0OftWvPcE5iwHaGk?w=89&h=89&c=1&rs=1&qlt=70&r=0&o=7&pid=InlineBlock&rm=3",
        categorie: "Mobilier"
      },
      {
        nom: "Canapé 3 Places",
        description: "Canapé confortable en tissu gris anthracite.",
        prix: 125000,
        image: "https://th.bing.com/th/id/OIP.fmDOZLfK_YGD3hRCrsvM3AHaHa?w=89&h=89&c=1&rs=1&qlt=70&r=0&o=7&pid=InlineBlock&rm=3",
        categorie: "Salon"
      }
    ];

    await Product.insertMany(produits);
    console.log("✅ Produits insérés avec succès !");
  } catch (err) {
    console.error("❌ Erreur lors du seed :", err);
  } finally {
    mongoose.connection.close();
  }
}
