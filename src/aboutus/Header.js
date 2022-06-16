import React from 'react'
// import { Link } from 'react-router-dom';
import Feature from './Navbar';
import "./Header.css"
function Header() {
  return (
    <div className='main__header'>
    <div className='header'>
       <div className='company'>
           <h1 className='company__header'> DreamLegal</h1>
       </div>
       <div className='features'>
          <Feature name="Products" />
          <Feature name="Solutions" />
          <Feature name="Resources" />
          <Feature name="Support" />
          <Feature name="About_us" />
          <Feature name="Get In Touch" />
       </div>
    
    </div>
    </div>
  )
}

export default Header