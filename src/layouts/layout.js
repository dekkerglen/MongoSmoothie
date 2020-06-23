import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

const Body = ({ children }) => {
  return (
    <div className="background flex-grow display-flex">
      <Container className="flex-grow display-flex p-0">
        <div className="body flex-grow">{children}</div>
      </Container>
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.element.isRequired,
};

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="wrapper display-flex">
      <Navbar className="header" expand="md">
        <Container>
          <NavbarBrand href="/">
            <h4>Mongo Smoothie</h4>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  About
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="">Donate</DropdownItem>
                  <DropdownItem href="https://github.com/dekkerglen/MongoSmoothie">GitHub</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Body>{children}</Body>
      <footer className="footer">
        <div className="footer-nav">
          <a href="/privacy">Privacy Policy</a>
          <a href="/tos">Terms and Conditions</a>
          <a href="/cookies">Cookies Policy</a>
        </div>
        <div className="credit centered">
          <p>All content &copy; 2020 Gwen Dekker</p>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
