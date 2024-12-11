import React from 'react';
import './messages.scss';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const repairers = [
    {
      id: 1,
      name: 'Ali Réparateur',
      description: 'Spécialiste en réparation de smartphones et tablettes.',
      rating: 4.5,
      image: 'https://img.freepik.com/photos-gratuite/portrait-du-pere-dans-son-jardin_23-2149489567.jpg',
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
      image: 'https://www.diouda.fr/cdn/shop/files/meilleur-soins-homme-peau-noire-metisse-mobile.webp?v=1651584405&width=980',
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

  const handleCardClick = (id) => {
    navigate(`/gig/${id}`); // Redirige vers la page gig avec l'ID du réparateur
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
            <div
              key={repairer.id}
              className="repairer-card"
              onClick={() => handleCardClick(repairer.id)} // Ajout du gestionnaire de clic
              style={{ cursor: 'pointer' }}
            >
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
