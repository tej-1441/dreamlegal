import React from 'react'
import './Investor.css';
function Investor(props) {
  return (
    <div className='investor'>
         {/* <div className="investor__name">{props.name}</div> */}
         <img className='investor__image' src={props.src} alt={props.name}></img>
    </div>
  )
}

export default Investor