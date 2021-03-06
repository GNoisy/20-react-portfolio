import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Navigation() {
    return (
        <Navbar className="border-bottom" collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">Giovanni Noisy</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0"/>
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav activeKey="/home">
                <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default Navigation;