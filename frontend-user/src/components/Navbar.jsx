import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MyNavbar = ({ loggedIn }) => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="/">MyFoodApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto"> {/* Use me-auto to push left content */}
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/my-food">
            <Nav.Link>My Food</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav> 
          {!loggedIn ? ( 
            <LinkContainer to="/account">
              <Nav.Link>Account</Nav.Link>
            </LinkContainer>
          ) : ( 
            <LinkContainer to="/my-information">
              <Nav.Link>My Information</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
