import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ActiveLink from "../activeLink/ActiveLink";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex nav justify-content-between align-items-center p-2">
          <div className="d-flex align-items-center gap-4">
            <img id="logo" src="https://i.ibb.co/r5X5PTG/icon.png" alt="" />
            <Navbar.Brand id="brandName">The Bengal Chefs' Pantry</Navbar.Brand>
          </div>
          <Nav id="nav-btn">
            <ActiveLink to="/">HOME</ActiveLink>
            <ActiveLink to="/features">BLOG</ActiveLink>
            <ActiveLink to="/pricing">PROFILE</ActiveLink>
            <ActiveLink to="/pricing">ABOUT</ActiveLink>
          </Nav>
          <div className="d-flex align-items-center">
            <div>
              <Button className="text-white log" variant="warning">LOGIN</Button>
            </div>
            <img className="ms-4" id="logo" src="https://i.ibb.co/r5X5PTG/icon.png" alt="" />
          </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
