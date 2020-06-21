import React from "react";
import {Container, Row, Navbar, Nav, NavItem, NavDropdown} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Logo from "../assets/images/Pokemon-logo.svg";


const Header = () => (
    <div>
        <Navbar bg="navbar-custom" expand="lg">
        <Container>
            <Navbar.Brand>
            <NavLink exact to="/"><Logo /></NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navbar-right">
                <Nav className="ml-auto">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
    </div>
)

export default Header;