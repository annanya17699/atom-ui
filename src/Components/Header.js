import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo1 from '../assets/logo1.png'

function Header() {
  
  return (
    <Navbar expand="lg" fixed='top' id='nav-main'>
      <Container>
        <Navbar.Brand href="/">
        <img
          alt=""
          src={logo1}
          width="100"
          height="auto"
          className="d-inline-block align-top"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'> 
          <Nav>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About Us</Nav.Link>
            <Nav.Link href='#services'>Services</Nav.Link>
            <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
            <Nav.Link href='#contact'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
