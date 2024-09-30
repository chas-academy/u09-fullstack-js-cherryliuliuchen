import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar: React.FC = () => {
  const isLoggedIn = !!localStorage.getItem('token'); // Check if user has already login

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Admin System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/user-management">User Management</Nav.Link>
          <Nav.Link as={Link} to="/create-user">Create User</Nav.Link>
          <Nav.Link as={Link} to="/my-information">My Information</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {!isLoggedIn && ( // Only show Login in if user does't not login.
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
