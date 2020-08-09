import React, { Fragment } from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Header.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Navbar collapseOnSelect expand="md" variant="dark">
        <Navbar.Brand href="#home">L-S MAGAZINE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <div className="collapse">
              <NavDropdown
                title="Dropdown"
                id="collasible-nav-dropdown"
              ></NavDropdown>
            </div>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/">Homepage</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/posts">Posts</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
