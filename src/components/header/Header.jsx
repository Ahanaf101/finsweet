import React from 'react'
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
import Logo from "../../assets/logo.png"
function Header() {
  return (
    <Navbar className='bg-gradient-to-r from-indigo-950 to-blue-500 ' expand="lg" >
    <Container>
      <Navbar.Brand href="#home">
        <img  src={Logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="ms-auto ">
          <Nav.Link className='!px-[25px] text-white' href="#home">Home</Nav.Link>
          <Nav.Link className='!px-[25px] text-white' href="#link">About us</Nav.Link>
          <Nav.Link className='!px-[25px] text-white' href="#link">Features</Nav.Link>
          <Nav.Link className='!px-[25px] text-white' href="#link">Pricing</Nav.Link>
          <Nav.Link className='!px-[25px] text-white' href="#link">FAQ</Nav.Link>
          <Nav.Link className='!px-[25px] text-white'  href="#link">Blog</Nav.Link>
         
        </Nav>
         
        <div  className="button  flex pl-[25px] transition-[.5s]">
                    <a className='px-[24px] py-[12px] border-[1px] border-gray-500 rounded-[30px] bg-ho no-underline text-zinc-50 font-medium	hover:rounded-[10px] transition-all duration-[.5s] animate-bounce hover:bg-black' href="#">Contact Us</a>
                    
                </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header