import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {


  return (
    <div className='sticky-top bg-white' >
    <Navbar variant="pills">
      <Nav  className="mx-auto pt-3 ">
        <Nav.Link href="/"> Dashboard</Nav.Link>
        <Nav.Link href="/resources"><p >Resources</p></Nav.Link>
        <Nav.Link href="/admin"><p >Admin Hub</p></Nav.Link>

        <NavDropdown className='text-white' title="Communities" id="basic-nav-dropdown">
          <NavDropdown.Item href="/classroom"><p >Classroom Community</p></NavDropdown.Item>
          <NavDropdown.Item href="/parents"><p>Parent Community</p></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/about"><p >About</p></Nav.Link>
      </Nav>
  </Navbar>
  </div>


)}

export default NavBar