import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    // Simulation de la logique d'enregistrement
    alert(`Compte créé avec succès pour ${firstName} ${lastName}`);
  };

  return (
    <div className="login">
      <div className="logo-background">
        <span className="logo-text">Allo-Fix</span>
      </div>
      <div className="login-container">
       
        <form onSubmit={handleRegister}>
        <h2>Créer un compte</h2>
          <div className="form-group">

            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Entrez votre prénom"
              required
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Entrez votre nom"
              required
            />
          </div>
          <div className="form-group">
            
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
            
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Entrez votre numéro de téléphone"
              required
            />
          </div>
          <div className="form-group">
           
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>
          <div className="form-group">
            
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmez votre mot de passe"
              required
            />
          </div>
          <button type="submit" className="login-button">
            S'inscrire
          </button>
        </form>
        <div className="login-links">
          <Link to="/login">Retour à la connexion</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
