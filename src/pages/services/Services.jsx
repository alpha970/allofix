import React from 'react';
import './Services.scss';

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <h1 className="services-title">Nos Services</h1>

        <div className="service-list">
          <div className="service-item">
            <img
              className="service-image"
              src="https://images.pexels.com/photos/1181241/pexels-photo-1181241.jpeg"
              alt="Service 1"
            />
            <h2 className="service-title">Réparation de Téléphone</h2>
            <p className="service-description">
              Nous réparons tous types de téléphones, que ce soit l'écran, la batterie, ou tout autre problème technique.
            </p>
            <button className="service-button">En savoir plus</button>
          </div>

          <div className="service-item">
            <img
              className="service-image"
              src="https://images.pexels.com/photos/1181242/pexels-photo-1181242.jpeg"
              alt="Service 2"
            />
            <h2 className="service-title">Réparation de Tablette</h2>
            <p className="service-description">
              Des problèmes d'écran, de batterie ou de performance ? Nous vous offrons un service rapide et efficace pour toutes vos tablettes.
            </p>
            <button className="service-button">En savoir plus</button>
          </div>

          <div className="service-item">
            <img
              className="service-image"
              src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg"
              alt="Service 3"
            />
            <h2 className="service-title">Réparation de PC</h2>
            <p className="service-description">
              Vous avez un problème avec votre PC ? Nous réparons tout, du matériel au logiciel, avec un service rapide et fiable.
            </p>
            <button className="service-button">En savoir plus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
