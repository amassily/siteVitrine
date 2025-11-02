import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1>Nos Services</h1>
      <div className="services-cards">
        <div className="service-card">
          <h2>Développement Web</h2>
          <p>Création de sites web modernes, responsives et rapides.</p>
        </div>
        <div className="service-card">
          <h2>UI/UX Design</h2>
          <p>Design élégant et expérience utilisateur optimale.</p>
        </div>
        <div className="service-card">
          <h2>Maintenance & Support</h2>
          <p>Assistance continue pour tous vos projets numériques.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
