import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
import './Footer.css';
import Button from 'react-bootstrap/Button';

function Footer() {
   const navigate=useNavigate();
  return (
    <div className='footer'>
        <div className='footer__logo'>
             <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQE7KQLjXBGZzg/company-logo_200_200/0/1625636069560?e=1663200000&v=beta&t=WWpGX-4d_K5Ck7Oo7RMGm3Iz0zBcUQ0f-aTZmr1pnxg" 
               alt="dreamLeagal" 
             />
             <p>A <strong>workspace</strong> for every
             <br/> <strong>Law</strong> enthusiast!</p>
        </div>

        <div className='sub__footer'>
            <h3 className='footer__headers'>
                Explore
            </h3>
            <div className='footer__elements'>
                <Link className='link' to="low">Law firms</Link>
                <Link className='link' to="firm">Tax consulting firms</Link>
                <Link className='link' to="department">In house departments</Link>
            </div>
        </div>

        <div className='sub__footer'>
            <h3 className='footer__headers'>
                Visit
            </h3>
            <div className='footer__elements'>
                <Link className='link' to="low">About us</Link>
                <Link className='link' to="firm">Carrier</Link>
                <Link className='link' to="low">Resources</Link>
                <Link className='link' to="department">Contact us</Link>
            </div>

        </div>

        <div className='sub__footer'>
            <h3 className='footer__headers'>
                Legal
            </h3>
            <div className='footer__elements'>
                <Link className='link' to="low">Privacy</Link>
            </div>
        </div>

        <div className='footer__getintouch'>
             <Button variant="outline-info" onClick={()=>(navigate('/getintouch'))}>Get In Touch</Button>
        </div>
    </div>
  )
}

export default Footer