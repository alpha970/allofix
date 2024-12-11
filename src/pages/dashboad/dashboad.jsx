import React from 'react';
import './dashboad.scss';

const Home = () => {
  const repairers = [
    {
      id: 1,
      name: 'Ali Réparateur',
      description: 'Spécialiste en réparation de smartphones et tablettes.',
      rating: 4.5,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Fatou Technicienne',
      description: 'Réparation d’ordinateurs et optimisation de performance.',
      rating: 4.8,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Oumar Expert',
      description: 'Réparation d’appareils électroménagers.',
      rating: 4.2,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= Math.floor(rating) ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="home">
      <header className="home-header">
        <h1>Bienvenue sur Allo-Fix</h1>
        <div className="search-bar">
          <input type="text" placeholder="Recherchez un réparateur..." />
          <button>Rechercher</button>
        </div>
      </header>
      <section className="repairers">
        <h2>Nos Réparateurs</h2>
        <div className="repairer-list">
          {repairers.map((repairer) => (
            <div key={repairer.id} className="repairer-card">
              <img src={repairer.image} alt={repairer.name} />
              <h3>{repairer.name}</h3>
              <p>{repairer.description}</p>
              <div className="rating">{renderStars(repairer.rating)}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
