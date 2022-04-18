import React from 'react'
import { Navbar,Container,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div> 
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">SKYTOURS</Navbar.Brand>
    <Nav className="me-auto" style={{marginLeft:"40%"}}>
    <Link to="/hotel"><Nav.Link href="#home">Hotel</Nav.Link></Link>
      <Link to="/voles"><Nav.Link href="#features">VOLE</Nav.Link></Link>
      <Link to="/"><Nav.Link href="#pricing">lOGOUT</Nav.Link></Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default navbar
