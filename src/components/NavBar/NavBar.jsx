import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import ActiveLink from "../activeLink/ActiveLink";
import "./NavBar.css";
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
            <ActiveLink to="/register">REGISTER</ActiveLink>
            <ActiveLink to="/favorites">FAVORITES</ActiveLink>
            <ActiveLink to="/blogs">BLOG</ActiveLink>
            <ActiveLink to="/about">ABOUT</ActiveLink>
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
              <Link to="/profile">
                <img
                  id="userPhoto"
                  href={user.photoURL}
                  src={
                    user.photoURL ?
                    user.photoURL :
                    "https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png"
                  }
                  title={user?.displayName}
                />
              </Link>
            }
            </div>
          }
          
      </Container>
    </Navbar>
  );
};

export default NavBar;
