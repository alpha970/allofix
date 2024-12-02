import React, { useRef, useState } from 'react'
import GigCard from '../../components/GigCard/GigCard';
import { gigs } from "../../data";
import './gigs.scss'
const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = ()=>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Allo-Fix > Electrotechnique ></span>
        <h1>Electrotechnique</h1>
        <p>
          Explorez nos services de réparation en électrotechniqe
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Appliquer</button>
          </div>
          
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs
