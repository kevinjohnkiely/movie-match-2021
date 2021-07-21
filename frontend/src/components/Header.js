import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

import logo from '../images/logo.png'

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
            <img
              alt="Movie Match 2021"
              src={logo}
              height="35"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/movies">
              <Nav.Link>
                <i className="fas fa-video"></i> Movies
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user"></i> Sign In
              </Nav.Link>
              </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
