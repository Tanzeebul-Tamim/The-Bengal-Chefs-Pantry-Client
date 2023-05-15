import React from "react";
import "./Blogs.css";
import Accordion from "react-bootstrap/Accordion";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs -");

  return (
    <div style={{marginBottom: "150px", marginTop: "150px"}} className="container d-flex flex-column align-items-center">
      <h1 className="text-center mb-4 health-tips-title text-warning">
        Blogs
      </h1>
      <Accordion style={{width: "70%"}} id="accord">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-header">
                <span className="fs-4 text-warning">
                    What's the differences between uncontrolled and controlled components?
                </span>
              </Accordion.Header>
              <Accordion.Body className="d-flex align-items-center gap-5">
                <div className="fs-5 text-white">
                In React, a controlled component is a component where the value of form elements like input, textarea, and select are controlled by the component state. Whereas, an uncontrolled component is a component where the form data is handled by the DOM itself, rather than by the component.
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="accordion-header">
                <span className="fs-4 text-warning">
                    How to validate React props using PropTypes?
                </span>
              </Accordion.Header>
              <Accordion.Body className="d-flex align-items-center gap-5">
                <div className="fs-5 text-white">
                    PropTypes is a built-in library in React that allows developers to validate the type and requiredness of props passed to a component. To use it, import PropTypes from the "prop-types" package and define the expected prop types for the component using the static propTypes object.
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="accordion-header">
                <span className="fs-4 text-warning">
                    What's the difference between nodejs and express js?
                </span>
              </Accordion.Header>
              <Accordion.Body className="d-flex align-items-center gap-5">              
                <div className="fs-5 text-white">
                     Node.js is a platform for running JavaScript on the server-side, and Express.js provides the structure and tools for building web applications on top of Node.js. it is a library that runs on Node.js and simplifies building web applications and APIs.                    
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="accordion-header">
                <span className="fs-4 text-warning">
                    What is a custom hook, and why will you create a custom hook?
                </span>
              </Accordion.Header>
              <Accordion.Body className="d-flex align-items-center gap-5">               
                <div className="fs-5 text-white">
                     A custom hook is a reusable function that contains logic that can be shared across components in a React application. Custom hooks are created to extract common logic from components and reduce code duplication.
                </div>
              </Accordion.Body>
            </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
