import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-between align-items-center p-2">
          <div className="d-flex align-items-center gap-4">
            <img id="logo" src="https://i.ibb.co/r5X5PTG/icon.png" alt="" />
            <Navbar.Brand id="brandName">The Bengal Chefs' Pantry</Navbar.Brand>
          </div>
          <Nav id="nav-btn">
            <Link to="/home">HOME</Link>
            <Link to="/features">BLOG</Link>
            <Link to="/pricing">PROFILE</Link>
            <Link to="/pricing">ABOUT</Link>
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
