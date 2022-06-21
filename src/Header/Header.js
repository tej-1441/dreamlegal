import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button.js';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    useNavigate
 } from 'react-router-dom';

import {Example} from '../categories/CatergoriesPopover.js';
import './Header.css';

function Header() {

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
  const handleLegislativeClick = ()=>{
    navigate('/legislative');
  }
  const handleArticlesClick = () =>{
     navigate('/articles');
  }
  const handleInsightClick =()=>{
    navigate('/insight');
  }
  const handleResearchPaperClick =()=>{
    navigate('/researchpaper');
  }

  return (
    <Navbar className='navbar' bg="dark" variant="dark" expand="xl">
      <Container fluid className='header'>
        <div className='brand'>
        <Navbar.Brand className='header__name' onClick={handleBrandClick}>DreamLegal</Navbar.Brand>
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
            <Nav.Link  className='navbar__element'><Example /></Nav.Link>
            </Button>
            
            <Button variant="outline-info">
             <NavDropdown className='navbar__element' title="Readers_Corner" id="navbarScrollingDropdown">
            
              <NavDropdown.Item onClick={handleInsightClick}>
              Our Insight
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLegislativeClick}>
               Legislative Analysis
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleArticlesClick}>
                Articles
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleResearchPaperClick}>
                Research Paper
              </NavDropdown.Item>

            </NavDropdown>
            </Button>
            <Button variant="outline-info">
             <NavDropdown className='navbar__element' title="Know_Us"  id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={handleAboutClick}>
              About Us
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleContactClick}>
                Get In Touch
              </NavDropdown.Item>
             </NavDropdown>
            </Button>
        
          </Nav>
        </Navbar.Collapse>
        </div>

      </Container>
    </Navbar>
  );
}
export default Header