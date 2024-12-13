import React, { useState } from 'react';
import './DevisForm.scss';

const QuoteRequest = () => {
  // État pour gérer la soumission du formulaire
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Marquer comme soumis
    
    // Déclencher une notification sonore 1 minute après l'envoi
    setTimeout(() => {
      const audio = new Audio('/notif.mp3'); // Remplacez par le chemin de votre fichier audio
      audio.play();
      setIsSubmitted(false); // Réinitialiser après 35 secondes
    }, 35000); // 60 000 ms = 1 minute
    
    // Réinitialiser l'état de soumission après 35 secondes
    setTimeout(() => setIsSubmitted(false), 60000); // Réinitialiser après 35 secondes
  };

  return (
    <div className="quote-request">
      <h1>Demande de devis</h1>
      
      {/* Affichage du message de succès si soumis */}
      {isSubmitted ? (
        <div className="success-message">
          <i className="fas fa-check-circle"></i>
          <span>Demande de devis envoyée ! Vous serez contacté en moins de 1h.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="problemDescription">Description du problème :</label>
          <textarea id="problemDescription" placeholder="Expliquez votre problème ici..." />
          
          <button type="submit">Générer un devis</button>
        </form>
      )}
    </div>
  );
};

export default QuoteRequest;
