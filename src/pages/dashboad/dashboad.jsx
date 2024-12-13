import React from 'react';
import './dashboard.scss';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const repairers = [
    {
      id: 1,
      img: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/98CC/production/_131761193_1f064d43-afea-4dd9-8743-57e979a4b18b.jpg.webp",
      pp: "https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Je réparerai votre tablette et la remettrai comme neuve",
      price:  "200 à 400",
      star: 5,
      username: "Youssef Chraibi",
    },
    {
      id: 2,
      img: "https://static.vecteezy.com/ti/photos-gratuite/p1/16852270-reparation-et-mise-a-niveau-du-telephone-mobile-de-l-electronique-du-materiel-informatique-et-du-concept-technologique-photo.jpg",
      pp: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Je réparerai votre téléviseur rapidement et efficacement.",
      price: "250 à 500",
      star: 5,
      username: "Rachid Idrissi",
    },
    {
      id: 3,
      img: "https://highservice.ma/wp-content/uploads/2024/02/reparation-electronique-indusrtrielle-.jpg",
      pp: "https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Avec plus de 5 ans d'expérience dans la réparation de smartphones",
      price: "150 à 400",
      star: 5,
      username: "Omar Bouzid",
    },
    {
      id: 4,
      img: "https://www.actu-environnement.com/images/illustrations/news/35115_large.jpg",
      pp: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Je réparerai votre ordinateur portable, quelle que soit la marque ou le problème.",
      price:"200 à 400",
      star: 4,
      username: "Karim Tazi",
    },
    {
      id: 5,
      img: "https://img.freepik.com/photos-gratuite/reparation-circuits-imprimes-gros-plan_23-2148419130.jpg",
      pp: "https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Je réparerai vos appareils électroménagers intelligents.",
      price: "300 à 500",
      star: 5,
      username: "Naima Alaoui",
    },
    {
      id: 6,
      img: "https://www.ecosystem.eco/upload/medias/645c9943f030c9.87467322_reparation.jpg",
      pp: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Je réparerai votre drone pour qu'il soit prêt à voler à nouveau.",
      price:"200 à 600",
      star: 4,
      username: "Nadia Tazi",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Je réparerai votre appareil photo numérique et ses accessoires",
      price:"200 à 400",
      star: 5,
      username: "Ahmed Bennis",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  const handleCardClick = (id) => {
    navigate(`/dashboard/gig/${id}`); // Redirige vers la page gig avec l'ID du réparateur
  };

  return (
    <div className="home">
      <header className="home-header">
        <h1>Bienvenue sur AlloFix</h1>
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
              onClick={() => handleCardClick(repairer.id)}
              style={{ cursor: 'pointer' }}
            >
              <img src={repairer.img} alt={repairer.username} />
              <h3>{repairer.username}</h3>
              <p>{repairer.desc}</p>
              <div className="rating">{renderStars(repairer.star)}</div>
              <p className="price">{repairer.price} DH</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
