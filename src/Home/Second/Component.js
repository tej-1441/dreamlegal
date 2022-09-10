import React from 'react'
import './Component.css';
import {useNavigate} from 'react-router-dom';
function Component(props) {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate(`/${props.name}`)
    }
  return (
    
    <div className='component' onClick={handleClick}>
    
          <h6 component__header>{props.name}</h6>
          <div className='component__rating'>
           {
             Array(props.rating).fill().map((_,i)=>{
                return(<div><i class="fa-solid star fa-star"></i></div>)
             })
           }
           <div>({props.number})</div>
          </div>
          <img className='component__image' src={props.imgsrc} alt={props.name} />
    </div>
  )
}

export default Component