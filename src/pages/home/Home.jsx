import React from 'react';
import './Home.scss';
import Feautured from '../../components/Feautured/Feautured';
import TrustedBy from '../../components/TrustedBy/TrustedBy';
import { projects } from "../../data";
import Slide from '../../components/Slide/Slide';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ReactPlayer from 'react-player';

// Importation des composants de react-leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const Home = () => {
  // Données des réparateurs avec leurs coordonnées
  const repairers = [
    { id: 1, name: 'Réparateur A', lat: 33.5907, lng: -7.6039, description: 'Réparations électriques' },
    { id: 2, name: 'Réparateur B', lat: 33.5970, lng: -7.6200, description: 'Maintenance industrielle' },
    { id: 3, name: 'Réparateur C', lat: 33.5797, lng: -7.5892, description: 'Réparation & dépannage' },
    { id: 4, name: 'Réparateur D', lat: 33.5898, lng: -7.6241, description: 'Installation électrique' },
    { id: 5, name: 'Réparateur E', lat: 33.5804, lng: -7.5940, description: 'Automatisation & Programmation' },
    { id: 6, name: 'Réparateur F', lat: 33.5861, lng: -7.6025, description: 'Maintenance industrielle' },
    { id: 7, name: 'Réparateur G', lat: 33.5874, lng: -7.6063, description: 'Réparation & dépannage' },
    { id: 8, name: 'Réparateur H', lat: 33.5892, lng: -7.6161, description: 'Câblage & raccordement' },
    { id: 9, name: 'Réparateur I', lat: 33.5825, lng: -7.6099, description: 'Audits & diagnostics' },
    { id: 10, name: 'Réparateur J', lat: 33.5985, lng: -7.6024, description: 'Installation électrique' },
    { id: 11, name: 'Réparateur K', lat: 33.5698, lng: -7.6340, description: 'Réparation & dépannage' },
    { id: 12, name: 'Réparateur L', lat: 33.5932, lng: -7.5897, description: 'Maintenance industrielle' },
    { id: 13, name: 'Réparateur M', lat: 33.5978, lng: -7.5852, description: 'Câblage & raccordement' },
    { id: 14, name: 'Réparateur N', lat: 33.5840, lng: -7.6105, description: 'Automatisation & Programmation' },
    { id: 15, name: 'Réparateur O', lat: 33.5767, lng: -7.5909, description: 'Réparation & dépannage' },
    { id: 16, name: 'Réparateur P', lat: 33.5630, lng: -7.5778, description: 'Installation électrique' },
    { id: 17, name: 'Réparateur Q', lat: 33.5697, lng: -7.6014, description: 'Maintenance industrielle' },
    { id: 18, name: 'Réparateur R', lat: 33.5811, lng: -7.6269, description: 'Réparation & dépannage' },
    { id: 19, name: 'Réparateur S', lat: 33.5982, lng: -7.6357, description: 'Audits & diagnostics' },
   
  ];

  return (
    <div className="home">
      <Feautured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Votre expert en électrotechnique  en un clic.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Des solutions sur mesure
            </div>
            <p>Trouvez des techniciens pour tous vos projets.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Rapidité et efficacité
            </div>
            <p>Intervention en un temps record</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Paiements sécurisés
            </div>
            <p>Payer en toute confiance.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Support 24h/7j
            </div>
            <p>Une assistance à tout moment.</p>
          </div>
          <div className="item">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=CB_0kuO315Y"
              controls
              playing={false}
              config={{
                youtube: {
                  playerVars: { start: 0, end: 20 },
                },
              }}
            />
          </div>
        </div>
      </div>
      
      
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Réparateurs locaux sur la carte</h1>
            {/* Intégration de la carte avec les réparateurs */}
            <MapContainer center={[33.5897, -7.6091]} zoom={12} style={{ height: "400px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {repairers.map(repairer => (
                <Marker
                  key={repairer.id}
                  position={[repairer.lat, repairer.lng]}
                  icon={new L.Icon({
                    iconUrl: 'https://cdn-icons-png.flaticon.com/512/8226/8226227.png', // Assurez-vous d'avoir une icône de marqueur
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                  })}
                >
                  <Popup>
                    <strong>{repairer.name}</strong><br />
                    {repairer.description}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
