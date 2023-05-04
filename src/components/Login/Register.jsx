import React, { useState } from "react";
import "./Login.css";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-text d-flex justify-content-center container my-5">
      <div style={{ width: "60%" }} className="bg-warning pb-4 rounded-5">
        <div className="text-center">
          <h1 className="py-3 login-title">Register Your Account</h1>
          <hr className="mx-5" />
        </div>
        <div className="p-4 d-flex gap-2 flex-column align-items-center">
          <div style={{ position: "relative" }}>
            <h4 className="fw-bold">Name</h4>
            <input
              className="rounded-4 p-4"
              style={{
                height: "65px",
                width: "558px",
                border: "none",
              }}
              required
              placeholder="Enter your name"
              type="text"
              name="name"
            />
          </div>
          <br />
          <div style={{ position: "relative" }}>
            <h4 className="fw-bold">Email Address</h4>
            <input
              className="rounded-4 p-4"
              style={{
                height: "65px",
                width: "558px",
                border: "none",
              }}
              required
              placeholder="Enter your email address"
              type="email"
              name="email"
            />
          </div>
          <br />
          <div style={{ position: "relative" }}>
            <h4 className="fw-bold">Password</h4>
            <input
              className="rounded-4 p-4"
              style={{
                height: "65px",
                width: "558px",
                border: "none",
              }}
              required
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              name="password"
            />
            <div
              style={{
                position: "absolute",
                top: "55%",
                right: "15px",
                cursor: "pointer",
                fontSize: "20px",
              }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <br />
          <div style={{ position: "relative" }}>
            <h4 className="fw-bold">Photo URL</h4>
            <input
              className="rounded-4 p-4"
              style={{
                height: "65px",
                width: "558px",
                border: "none",
              }}
              required
              placeholder="Enter the URL of your profile photo"
              type="text"
              name="name"
            />
          </div>
          <div className="my-3">
            <Button
              style={{ width: "558px", height: "55px" }}
              type="submit"
              variant="danger"
              className="fs-5 mt-3 py-2"
            >
              Submit
            </Button>
          </div>
          <p className="mt-3">
            Already have an account? Please{" "}
            <Link style={{ textDecoration: "none" }} to="/login">
              <span className="fw-bold text-danger">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
