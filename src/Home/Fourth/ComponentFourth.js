import React,{useState} from 'react';
import './ComponentFourth.css';
function ComponentFourth(props) {
   const [more,setMore]=useState(false);
   const handleMouseEnter = ()=>{
      setMore(true);
   }
   const handleMouseLeave = () =>{
    setMore(false);
   }
  return (
    <div className='componentfourth'>
       <div className='componentfourth__inner' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
       <img className='componentfourth__image' src={props.src} alt={props.name} />
       <div className={`componentfourth__para ${more?'morepara':''} `}>{props.para}</div>
       <div className={`componentfourth__level ${more?'morelevel':''} `}>{props.level}</div>
       </div>
    </div>
  )
}

export default ComponentFourth