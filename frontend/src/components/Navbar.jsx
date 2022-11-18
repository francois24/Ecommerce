import React from 'react'
import {Container ,Button , Form , Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { BsCartPlus } from "react-icons/bs";
import '../CSS/Navbar.css'

const Navbar1 = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{background: '#DEF5E5', height: '70px'}}>
        <Container>
            <Navbar.Brand href="#home" className='text-dark fw-bold'>UNDERGRNDEV</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{background: 'teal'}}/>
            <Navbar.Collapse id="responsive-navbar-nav" className='button1'>

            <Form className="d-flex">
            <Form.Control type="search" placeholder="Search"className="me-2"
            aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
            </Form>

            <Nav className="ms-auto">
            <Nav.Link className='text-dark' href="#/">Home</Nav.Link>
            <Nav.Link className='text-dark' href="#about">About</Nav.Link>
            <Nav.Link className='text-dark' href="#product">Product</Nav.Link>
            <Nav.Link className='text-dark' href="#register">Register</Nav.Link>
            <Nav.Link className='text-dark' eventKey={2} href="#login">
              Login
            </Nav.Link>
            <Nav.Link className='text-dark' href="#register"><BsCartPlus className='cart'/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbar1
