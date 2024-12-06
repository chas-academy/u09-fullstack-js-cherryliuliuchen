import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = ({ loggedIn }) => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="/">MyFoodApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto"> {/* Use me-auto to push left content */}
          <Nav.Item>
            <Link to="/" className="nav-link">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/my-food" className="nav-link">My Food</Link>
          </Nav.Item>
        </Nav>
        <Nav> 
          {!loggedIn ? ( 
            <Nav.Item>
              <Link to="/account" className="nav-link">Account</Link>
            </Nav.Item>
          ) : ( 
            <Nav.Item>
              <Link to="/my-information" className="nav-link">My Information</Link>
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
