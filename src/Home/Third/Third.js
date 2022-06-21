import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import './Third.css';
import {useNavigate} from "react-router-dom";

function Third() {
    const navigate=useNavigate();
    const handleAddReview = () =>{
         navigate('/addreview');
    }

  return (
    <div className='thirdhome'>
        <div className='thirdhome__left'>
         <img className='thirdhome__left__image' src="https://www.g2.com/assets/homepage_reviews_screenshot-e3f43d8a1b2de15981f59a92585bcd620a0235fbaef6d746e9c9ca792980ebc7.png" alt="thirdhome__image" />
        </div>
        <div className='thirdhome__right'>
           <h2 className='thirdhome__right__heading'>
             <div className='thirdhome__right__heading__first'>
              Using Software?
             </div>
             <div className='thirdhome__right__heading__second'>
              Write a review
             </div>
           </h2>
           <p className='thirdhome__right__paragraph'>
            Help over 5 million monthly Buyers on DreamLegal 
            make the <br />right choice for their business.
           </p>
           <Button onClick={handleAddReview} variant="outline-info">Write a Review</Button>
        </div>
    </div>
  )
}

export default Third