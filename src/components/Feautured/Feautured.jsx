import React from 'react'
import './Feautured.scss'
const Feautured = () => {
    return (

        <div className="featured">
            <div className="container">
                <div className="left">
                 
                    <h1>
                    Trouvez des techniciens <span>experts </span>pour réparer vos appareils électroniques, à tout moment et en tout lieu.
                    </h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt="" />
                            <input type="text" placeholder='Essayez : "Réparer un Téléphone"' />
                        </div>
                        <button>Rechercher</button>
                    </div>
                    <div className="popular">
                        <span>Populaire :</span>
                        <button>Remplacement de la batterie</button>
                        <button>Réparation d'ordinateurs </button>
                        <button>Services d'urgence</button>
                    </div>
                </div>
                <div className="right">
                    <img src="https://www.saweblia.ma/images/69-698672_construction-worker-love-me-my-construction-worker-1cons.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Feautured
