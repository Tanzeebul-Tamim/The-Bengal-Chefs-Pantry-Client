import React, { useContext, useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [error, setError] = useState('');
  const { createUser, setLoading } = useContext(AuthContext);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const userDetails = {name, photo, email};

    setError("");

    if (password.length < 6) {
        setError ("Password must be at least 6 characters long!");
        return;
    }
    else if (!/(?=.*[A-Z])/.test(password)) {
        setError ("Password must contain at least one uppercase letter");
        return;
    }
    else if (!/(?=.*\d)/.test(password)) {
        setError ("Password must contain at least one digit");
        return;
    }
    else if (!/(?=.*[!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/~])/.test(password)) {
        setError ("Password must contain at least one special character");
        return;
    }

    createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            console.log(createdUser)
            toast.success("Registration successful! You can now log in.", {
                position: "top-center",
                autoClose: 900,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setTimeout(function() {
                window.location.href = "/login";
              }, 1800);
        })
        .catch(error => {
            console.error(error);
            if (error.message.includes("email")) {
                setError("This email is already in use. Please use a different email.");
                setLoading(false);
            }
        })      
  }
    
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-text d-flex justify-content-center container my-5">
      <div style={{ width: "60%" }} className="bg-warning rounded-5">
        <div className="text-center">
          <h1 className="py-3 login-title">Register Your Account</h1>
          <hr className="mx-5" />
        </div>
        <Form onSubmit={handleRegister} className="p-4 d-flex gap-2 flex-column align-items-center">
          <div className="mb-2" style={{ position: "relative" }}>
            <h4 className="fw-bold">Name</h4>
            <input
              className="rounded-4 p-4"
              style={{
                height: "65px",
                width: "558px",
                border: "none",
              }}
              
              placeholder="Enter your name"
              type="text"
              name="name"
            />
          </div>
          <div className="mb-2" style={{ position: "relative" }}>
            <h4 className="fw-bold">Photo URL</h4>
            <input
              className="rounded-4 p-4"
              style={{
                height: "65px",
                width: "558px",
                border: "none",
              }}
              
              placeholder="Enter the URL of your profile photo"
              type="text"
              name="photo"
            />
          </div>
          <div className="mb-2" style={{ position: "relative" }}>
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

            {
                <p>
                    <span className="text-danger">{error}</span>
                </p>
            }
            
          <div className="mb-2">
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
        </Form>
      </div>
    </div>
  );
};

export default Register;
