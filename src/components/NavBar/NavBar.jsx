import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import ActiveLink from "../activeLink/ActiveLink";
import "./NavBar.css";
import { FaUserCircle } from "react-icons/fa";
import ReactLoading from 'react-loading';

const NavBar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch(error => console.error(error));
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex nav justify-content-between align-items-center p-2">
          <div className="d-flex align-items-center gap-4">
            <img id="logo" src="https://i.ibb.co/r5X5PTG/icon.png" alt="" />
            <Navbar.Brand id="brandName">The Bengal Chefs' Pantry</Navbar.Brand>
          </div>
          <Nav id="nav-btn">
            <ActiveLink to="/">HOME</ActiveLink>
            <ActiveLink to="/blogs">BLOG</ActiveLink>
            <ActiveLink to="/register">REGISTER</ActiveLink>
            <ActiveLink to="/profile">PROFILE</ActiveLink>
          </Nav>
          {
            loading ? 
            <ReactLoading type={"cylon"} color={"#ffc107"} height={'5%'} width={'5%'} />:
            <div id="btn-login" className="d-flex gap-3 align-items-center">
            {
              user ?
              <Link onClick={handleLogOut} to="/">
               <Button className="text-white" variant="warning">LOG OUT</Button>
              </Link> :
              <Link to="/login">
                <Button className="text-white" variant="warning">LOGIN</Button>
              </Link> 
            }           
            {
              user &&
              (user.photoURL ?
              <img title={user?.displayName} style={{height: "40px", width: "40px", borderRadius: "50%"}} src={user?.photoURL} alt="" /> :
              <FaUserCircle className="text-warning fs-1"></FaUserCircle>)
            }
          </div>}
      </Container>
    </Navbar>
  );
};

export default NavBar;
