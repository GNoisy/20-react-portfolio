import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand to="/home">Giovanni Noisy</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0"/>
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav activeKey="/home">
                <Nav.Item>
                <Nav.Link to="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link to="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link to="link-2">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default Navigation;