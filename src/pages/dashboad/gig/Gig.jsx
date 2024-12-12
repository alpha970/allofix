import React from 'react'
import { Slider } from "infinite-react-carousel/lib";
import { Link } from 'react-router-dom';
import './Gig.scss'
const DGig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">AlloFix -{'>'} Electrotechnique </span>
          <h1>Je réparerai rapidement vos problèmes d'écran ou de batterie de smartphone</h1>
          <div className="user">
            <img
              className="pp"
              src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/98CC/production/_131761193_1f064d43-afea-4dd9-8743-57e979a4b18b.jpg.webp"
              alt=""
            />
            <span>Youssef Chraibi</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://www.adexcel-group.com/sites/default/files/styles/component_text_image_large/public/2023-07/Maintenance-reparation-informatique-AdExcel.jpg?h=07845c6b&itok=G36LbC-c"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQR5GSO9xrap-wYXfqS9hW8cN99NeHd554w&s"
              alt=""
            />
            <img
              src="https://www.reparer.eu/wp-content/uploads/2022/04/reparation-electronique-comment-faire-e1650297053815.png"
              alt=""
            />
          </Slider>
          <h2>À propos du service</h2>
          <p>
          L'écran de votre smartphone est fissuré ou votre batterie se décharge trop vite ? Je suis là pour vous aider !
          Avec plus de 5 ans d'expérience dans la réparation de smartphones, je me spécialise dans la résolution d'un large éventail de problèmes pour toutes les grandes marques, y compris iPhone, Samsung, Huawei, etc. J'offre des services rapides, fiables et abordables pour remettre votre téléphone en parfait état de fonctionnement.
          </p>
          <div className="seller">
            <h2>A propos du technicien</h2>
            <div className="user">
              <img
                   src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/98CC/production/_131761193_1f064d43-afea-4dd9-8743-57e979a4b18b.jpg.webp"
                alt=""
              />
              <div className="info">
                <span>Hiba Kasbi</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contactez-moi</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">De</span>
                  <span className="desc">Casablanca</span>
                </div>
                <div className="item">
                  <span className="title">Membre Depuis</span>
                  <span className="desc">Décembre 2024</span>
                </div>
                <div className="item">
                  <span className="title">Temps de réponse</span>
                  <span className="desc">4 heures</span>
                </div>
                {/* <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div> */}
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">Français-Arabe</span>
                </div>
              </div>
              <hr />
              
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Hakim Jbabra</span>
                  <div className="country">
                     
                    <span> De : Rabat</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              Excellent service ! Mon téléphone a été réparé rapidement et il fonctionne parfaitement maintenant. Le technicien était professionnel et la réparation a été effectuée plus rapidement que prévu. Je recommande vivement !
              </p>
              <div className="helpful">
                <span>Util?</span>
                <img src="/img/like.png" alt="" />
                <span>Oui</span>
                <img src="/img/dislike.png" alt="" />
                <span>Non</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Mohammed chaouki</span>
                  <div className="country">
                    
                    <span>De : Casablanca</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              Excellente expérience ! Le technicien était sympathique et compétent. Mon appareil a été parfaitement réparé et tout le processus s'est déroulé sans problème et rapidement. J'utiliserai certainement à nouveau ce service !
              </p>
              <div className="helpful">
                <span>Util?</span>
                <img src="/img/like.png" alt="" />
                <span>Oui</span>
                <img src="/img/dislike.png" alt="" />
                <span>Non</span>
              </div>
            </div>
            <hr />
            
          </div>
        </div>
        <div className="right">
        <div className="contact-icons">
        <Link to="/messages">
        <i className="fas fa-envelope"></i>
      </Link>
  <a href="tel:+1234567890">
    <i className="fas fa-phone"></i>
  </a>
  <a href="https://wa.me/+1234567890">
    <i className="fab fa-whatsapp"></i>
  </a>
</div>

  <div className="price">
    <h3>Prix moyen de réparation</h3>
    <h2>249.99 Dh</h2>
  </div>
  <p>Je répare vos équipements électriques rapidement et efficacement</p>
  <div className="features">
    <div className="item">
      <img src="/img/greencheck.png" alt="" />
      <span>Diagnostic rapide</span>
    </div>
    <div className="item">
      <img src="/img/greencheck.png" alt="" />
      <span>Réparation de composants défectueux</span>
    </div>
    <div className="item">
      <img src="/img/greencheck.png" alt="" />
      <span>Installation électrique</span>
    </div>
    <div className="item">
      <img src="/img/greencheck.png" alt="" />
      <span>Additional design</span>
    </div>
  </div>
  <button>Demander un devis</button>
</div>

      </div>
    </div>
  )
}

export default DGig
