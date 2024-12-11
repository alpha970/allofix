import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Pour l'instant, redirection automatique vers /messages
    navigate('/messages');
  };

  return (
    <div className="login">
      <div className="logo-background">
        <span className="logo-text">Allo-Fix</span>
      </div>
      <div className="login-container">
        <h2>Connexion</h2>
        <form onSubmit={handleLogin}>
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
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Connexion
          </button>
        </form>
        <div className="login-links">
          <Link to="/login">Mot de passe oublié ?</Link>
          <Link to="/login">Créer un compte</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
