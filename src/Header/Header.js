import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
     Router,
    Routes,
    Route,
    Link,
    useNavigate
 } from 'react-router-dom';
function Header() {

const navigate=useNavigate();
const handleHomeClick=()=>{
   navigate('/');
}
 const handleResourcesClick=()=>{
    navigate('/resources');
 }
 const handleSupportClick=()=>{
    navigate('/support');
  } 
  const handleAboutClick=()=>{
      navigate('/aboutus');
  }
  const handleContactClick=()=>{
     navigate('/getintouch');
  }
  const handleBrandClick=()=>{
    navigate('/');
  }

  return (
    <Navbar bg="dark" variant="dark" expand="xl">
      <Container fluid>
        <Navbar.Brand onClick={handleBrandClick}>DreamLegal</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={handleHomeClick}>Home</Nav.Link>
            <Nav.Link onClick={handleResourcesClick}>Resources</Nav.Link>
            <Nav.Link onClick={handleSupportClick}>support</Nav.Link>

            <NavDropdown title="Knowus" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={handleAboutClick}>About</NavDropdown.Item>
              <NavDropdown.Item onClick={handleContactClick}>
                Getintouch
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header