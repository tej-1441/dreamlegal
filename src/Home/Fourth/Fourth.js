import React from 'react'
import ComponentFourth from './ComponentFourth';
import './Fourth.css';
import {useNavigate} from 'react-router-dom';
import  {Fade}  from 'react-bootstrap';

function Fourth() {
  const navigate = useNavigate();
  const handleMoreReview = ()=>{
      navigate('/morereview');
  }
  return (
    <div className='fourthhome'>
     {/* <Fade right> */}
      <h2 className='fourthhome__header'>
        Some of our Customer Review
      </h2>
      <hr className='divider' size='5'></hr>
      <div className='fourthhome__elements'>
      <ComponentFourth
       src='https://www.bing.com/th?id=OIP.dnIVusmAUZyu0D_7rcuz2wHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
       para=' Excellent customer service from (EN)!! He helped clarify many questions I had regarding (Service)!'
       level='Ravi,fastgrowth'
       />
      <ComponentFourth
        src='https://th.bing.com/th/id/OIP.ftcC3x2iQo_X9ll_bVanqQHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7'
        para=' Great service, efficient communication and a really easy way to get a mortgage with lots of help and support to get the right deal.'
        level='Utkarsh,Amazon'
       />
      <ComponentFourth
        src='https://th.bing.com/th/id/OIP.4p5WY4c61EzpqNPDVO1ZHQHaEo?w=262&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
        para=' The service is smooth and straightforward. My advisor was helpful. I would recommend deal direct'
        level='Amritsha,Smashers'      
       />
        <ComponentFourth
        src='https://www.bing.com/th?id=OIP.bHpONCgQO6D_O8PDIAIUoAHaE8&w=162&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
        para=' The service is smooth and straightforward. My advisor was helpful. I would recommend deal direct'
        level='iliaka,Dreamlegal'      
       />
        <ComponentFourth
        src='https://media.gettyimages.com/photos/pretty-asian-woman-portrait-with-led-lights-picture-id1149822383?k=20&m=1149822383&s=612x612&w=0&h=i3nLqS_Mmunnkl6MYedmVCfBqkOLsWTYVpJa8PGALDs='
        para=' The service is smooth and straightforward. My advisor was helpful. I would recommend deal direct'
        level='Ieshea,Difflook'      
       />
        <ComponentFourth
        src='https://media.gettyimages.com/photos/portrait-of-bearded-man-picture-id884106982?k=20&m=884106982&s=612x612&w=0&h=kX7AY3EcXw-516zYl6HPGma7c8PTrElzVOuQotnr92o='
        para=' The service is smooth and straightforward. My advisor was helpful. I would recommend deal direct'
        level='Micheal,Nonegative'      
       />
      </div>
      <div className='more__review' onClick={handleMoreReview}>more review...</div>
    {/* </Fade> */}
    </div>
  )
}

export default Fourth