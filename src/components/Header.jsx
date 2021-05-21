import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Pratham's Shop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto" }}>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas  fa-shopping-cart"></i>
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
