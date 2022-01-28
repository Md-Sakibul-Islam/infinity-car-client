import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const history = useHistory();
  const { user, logOutUser } = useAuth();

  const handleLoginPage = () => {
    history.push("/login");
  };
  return (
    <div className="nav-item-container">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>

             
              {user.email ? (
                <>
                  <Nav.Link as={Link} to="/dashboard">
                    Dashboard
                  </Nav.Link>
                  <span className="text-white mt-2">{user?.displayName}</span>
                  <Button variant="dark" onClick={logOutUser}>
                    LogOut
                  </Button>
                </>
              ) : (
                <Button onClick={handleLoginPage} variant="dark">
                  Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
