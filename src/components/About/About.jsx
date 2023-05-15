import React from "react";
import { Container } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import "./About.css";

const About = () => {
  useTitle("About -");
  return (
    <Container className="my-5 text-center">
      <h1 className="text-center mb-4 about-title text-warning">About Us</h1>
      <div className="about-des fs-5 text-white">
        <p>
          Welcome to <i className="fw-bold">"The Bengal Chef's Pantry"</i>,
          dedicated to all things food and cooking! We are passionate about
          sharing the journey of chefs, their unique recipes, and their
          experiences with food. We believe that food brings people together and
          can be a form of creative expression. Our aim is to inspire and
          educate our readers about the joys of cooking and the importance of a
          healthy lifestyle.
        </p>
        <br />
        <p>
          Our team of experienced chefs and food enthusiasts share their
          expertise and knowledge with you through a variety of articles,
          videos, and recipes. From beginner-level tips and tricks to more
          advanced techniques, we have something for everyone. Whether you are a
          seasoned home cook or a beginner, our content is designed to help you
          improve your skills in the kitchen and create delicious meals for your
          family and friends.
        </p>
        <br />
        <p>
          Thank you for joining us on this culinary journey, and we hope you
          enjoy exploring our website!
        </p>
      </div>
    </Container>
  );
};

export default About;
