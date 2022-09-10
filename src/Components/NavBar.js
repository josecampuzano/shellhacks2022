import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
const NavBar = () => {
    
  return (
    <container>
    <Navbar variant="pills" >
      <Nav  className="mr-auto">
        <Nav.Link href="/"> Home</Nav.Link>
        <Nav.Link href="/resources"><p >Resources Page</p></Nav.Link>
        <Nav.Link href="/meetings"><p >Meeting Center</p></Nav.Link>
        <NavDropdown className='text-white' title="Communities" id="basic-nav-dropdown">
          <NavDropdown.Item href="/classroom"><p >Classroom Community</p></NavDropdown.Item>
          <NavDropdown.Item href="/parents"><p>Parent Community</p></NavDropdown.Item>
        </NavDropdown>
      </Nav>
  </Navbar>
  </container>

)}

export default NavBar