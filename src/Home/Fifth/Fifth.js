import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import './Fifth.css';
function Fifth() {

    const navigate=useNavigate();
    const handleSell =()=>{
        navigate('./sell')
    }

  return (
    <div className='fifthhome'>
        <div className='fifthhome__left'>
           <div className='fifthhome__left__header'>
            <h1 className='fifthhome__left__header__first'>
               Selling Software?
            </h1>
            <h1 className='fifthhome__left__header__second'>
               Reach more buyers
            </h1>
           </div>
           <div className='fifthhome__left__para'>
           Your future customers are researching their next purchase on DreamLegal.
           Make sure they can find you.
           </div>
           <Button onClick={handleSell} variant='outline-info'>Claim DreamLeagal Profile</Button>
        </div>
        <div className='fifthhome__right'>
           <img className='fifthhome__right__image' src="https://www.g2.com/assets/profile_screenshots-a84b3e5b2d744fbcaafb601feb1762582fb2cd5bdbaaa3d3a32b8dd4196c5b1b.png" alt="fifthhome__right__image"></img>
        </div>
    </div>
  )
}

export default Fifth