import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/WebSite">Webpage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-nav-bar" />
        <Navbar.Collapse id="basic-nav-bar">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/WebSite">Home</Nav.Link>{" "}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/WebSite/about">About</Nav.Link>{" "}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/WebSite/contact">Contact</Nav.Link>{" "}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
