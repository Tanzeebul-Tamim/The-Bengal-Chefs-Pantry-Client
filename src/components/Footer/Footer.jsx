import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gx-4">
          <div className="col-md-3">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              bibendum, neque ac fringilla vestibulum, elit elit bibendum elit,
              vel consequat quam enim nec tortor.
            </p>
          </div>
          <div className="col-md-3">
            <h3>Opening Hours</h3>
            <ul className="list-unstyled">
              <li>Monday - Friday: 8:00 AM - 10:00 PM</li>
              <li>Saturday: 10:00 AM - 11:00 PM</li>
              <li>Sunday: 12:00 PM - 9:00 PM</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>
              Level-4, 34, Awal Centre, Banani
              <br />
              Dhaka
              <br />
              Phone: 123-456-7890
              <br />
              Email: info@restaurant.com
            </p>
          </div>
          <div className="col-md-3">
            <h3>Find Us On</h3>
              <div className="d-flex gap-3 fs-2">
                <a href=""><FaFacebookF style={{color: "#4267B2"}}></FaFacebookF></a>
                <a href=""><FaTwitter style={{color: "#1DA1F2"}}></FaTwitter></a>
                <a href=""><FaInstagram style={{color: "crimson"}}></FaInstagram></a>
                <a href=""><FaYoutube style={{color: "red"}}></FaYoutube></a>
              </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              © 2023 The Bengal Chefs' Pantry. All rights reserved. Designed by
              <a
                href="https://www.facebook.com/tanzeebul.tamim"
                target="_blank"
                className="ms-1"
              >
                Tanzeebul Tamim
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
