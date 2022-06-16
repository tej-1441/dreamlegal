import React from 'react';
import './TeamMember.css';

function TeamMember(props) {
  return (
    <div className='team__member'>
       <img className='team__member__image' src={props.src} alt={props.name}></img>
       <h2 className='team__member__name'>{props.name}</h2>
       <h3 className='team__member__title'>{props.title}</h3>
    
    </div>
  )
}

export default TeamMember