import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './resetpassword.scss';

const ResetPass = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Ajouter une logique pour réinitialiser le mot de passe
    alert(`Un lien de réinitialisation a été envoyé à ${email}`);
  };

  return (
    <div className="login">
      <div className="logo-background">
        <span className="logo-text">Allo-Fix</span>
      </div>
      <div className="login-container">
        <h2>Mot de passe oublié</h2>
        <form onSubmit={handleForgotPassword}>
          <div className="form-group">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre e-mail"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Réinitialiser le mot de passe
          </button>
        </form>
        <div className="login-links">
          <Link to="/login">Retour à la connexion</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
