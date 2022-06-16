import React from 'react'
import "./Navbar.css";
import {useNavigate} from "react-router-dom";

// import {AboutusAction}  from '../store/index.js';
// import { useSelector,useDispatch } from "react-redux";

function Feature(props) {
  // onClick={()=>handleClick(props.name)}
  const navigate=useNavigate();
  
  return (
    <div className='feature'>
        {props.name!=="Get In Touch"?(
        <div className='name'>
        <h4 className='feature__name'>{props.name}</h4>
        <button className='name__btn'><i class="fa-solid fa-angle-down"></i></button>
        </div>):
            <button onClick={()=>(navigate('/getintouch'))} className='getintouch__button'>
              Get In Touch
            </button>}
    </div>
  )
}

export default Feature