import React from 'react'
import './footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>A propos</h2>
            <span>Qui sommes nous ?</span>
            <span>Charte Qualité</span>
            <span>Contact</span>
            
          </div>
          <div className="item">
            <h2>Nos prestations</h2>
            <span>Remplacer une poignée par une porte</span>
            <span>Panne de courant</span>
            <span>Fuite d'eau WC</span>
            <span>Raccorder ma machine à laver</span>
            <span>Remplacer une ampoule</span>
            <span>Serrure bloquée</span>
          </div>
          <div className="item">
            <h2>Vos demandes</h2>
            <span>Suivez votre demande </span>
            <span>FAQ</span>
            
          </div>
          <div className="item">
            <h2>Recrutement</h2>
            <span>Rejoignez le réseau Artisan</span>
            <span>Travaillez chez Allo-Fix</span>
            
          </div>
          
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Allo-Fix</h2>
            <span> Copyright© 2024 Allo-Fix - Tous droits réservés  </span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>Français</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>FR</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
