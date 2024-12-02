import React from 'react'
import './Home.scss'
import Feautured from '../../components/Feautured/Feautured'
import TrustedBy from '../../components/TrustedBy/TrustedBy'
import { cards, projects } from "../../data";
import Slide from '../../components/Slide/Slide';
import CatCard from '../../components/CatCard/CatCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ReactPlayer from 'react-player';
const Home = () => {
  return (
    <div className="home">
      <Feautured />
      <TrustedBy />
      {/* <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide> */}
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Votre expert en électrotechnique, en un clic.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Des solutions sur mesure
            </div>
            <p>
              Trouvez des techniciens pour tous vos projets.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Rapidité et efficacité
            </div>
            <p>
              Intervention en un temps record
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Paiements sécurisés
            </div>
            <p>
              Payer en toute confiance.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Support 24h/7j
            </div>
            <p>
              Une assistance à tout moment.
            </p>
          </div>
          <div className="item">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=CB_0kuO315Y"
              controls
              playing={true}
              config={{
                youtube: {
                  playerVars: { start: 0, end: 20 }, // Start at 0 seconds, end at 60 seconds
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explorez nos services en électrotechnique</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Installation électrique</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Maintenance industrielle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Automatisation & Programmation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Réparation & dépannage</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Câblage & raccordement</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Audits & diagnostics</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Formation en électrotechnique</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Consultation technique</span>
            </div>

          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              Allo-Fix <i>Artisan</i>
            </h1>
            <h1>
              En intégrant le réseau chaque artisan <i>bénificie de :</i>
            </h1>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Assurance professionelle
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Formation métiers
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Accès facilités au Statut Auto-entrepreneur
            </div>
            <button>Explorer Allo-Fix Artisan</button>
          </div>
          <div className="item technicien">
            <img
              src="https://www.saweblia.ma/images/lightfieldstudios181025673-removebg-preview-1parrainange.png"
              alt=""
            />

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
