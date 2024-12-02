import React from 'react'
import './projectCard.scss'
import { Link } from 'react-router-dom'
const ProjectCard = ({ card }) => {
  return (
    <div className="projectCard">
      <Link to={"/gig/12"} style={{textDecoration:'none'}}>

        <img src={card.img} alt="" />
        <div className="info">
          <img src={card.pp} alt="" />
          <div className="texts">
            <h2>{card.cat}</h2>
            <span>{card.username}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard
