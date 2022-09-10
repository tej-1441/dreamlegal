import React,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button.js';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from 'react-router-dom';
import {auth} from '../firebase';
import {useSelector} from 'react-redux';
import './Header.css';

function Header() {
  
  const user=useSelector((state)=>state.user);
  const navigate=useNavigate();
  const handleAboutClick=()=>{
      navigate('/aboutus');
  }
  const handleContactClick=()=>{
     navigate('/getintouch');
  }
  const handleBrandClick=()=>{
    navigate('/');
  }
  const handleCategories = () =>{
    navigate('/categories');
  }
  const handleReadersCorner = () =>{
    navigate('/readerscorner');
  }
  const handleAuthentication =() =>{
    if(user){
      auth.signOut();
      return;
    }
    else{
      navigate('/login');
    }
  }
  console.log(user);
  return (
    <Navbar className={`navbar`} sticky="top" expand="xl">
      <Container fluid className='header'>
        <div className='brand'>
        <div className='header__name' onClick={handleBrandClick}>DreamLegal</div>
        </div>
        <div className='other'>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
               <Button variant='outline-info'>
             <Nav.Link onClick={handleCategories}
              className='navbar__element'>Categories</Nav.Link>
            </Button>
            
            <Button variant='outline-info'>
             <Nav.Link onClick={handleReadersCorner}
              className='navbar__element'>Readers_Corner</Nav.Link>
            </Button>
            <Button variant="outline-info">
             <NavDropdown  title="Know_Us" id="navbarScrollingDropdown">
              <NavDropdown.Item  onClick={handleAboutClick}>
              About Us
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleContactClick}>
                Request Demo
              </NavDropdown.Item>
             </NavDropdown>
            </Button>
            <Button variant='outline-info'>
             <Nav.Link onClick={handleAuthentication}
              className='navbar__element'>
              {!user?'Login':user}
              </Nav.Link>
            </Button>
        
          </Nav>
        </Navbar.Collapse>
        </div>

      </Container>
    </Navbar>
  );
}
export default Header