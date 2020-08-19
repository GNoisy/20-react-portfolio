import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <Navbar className="border-bottom" collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand >Giovanni Noisy</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0"/>
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav activeKey="/home">
                <Nav.Item>
                <Nav.Link to="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link to="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link to="/contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default Navigation;