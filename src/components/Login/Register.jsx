import React, { useContext, useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";
import { getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { createUser, setLoading, logOut } = useContext(AuthContext);
  useTitle("Register -");

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const updateUser = () => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
      })
      .then(() => {})
      .catch(error => console.error(error));
    }

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
            console.log(createdUser);
            toast.success(`A verification email has been sent to ${email}. After verifying your email you can log in.`, {
                position: "top-center",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            sendEmailVerification(createdUser);
            logOut();  
            setSuccess("Registration Successful!");
            setError("");       
            setTimeout(function() {
                window.location.href = "/login";
              }, 4400);
            updateUser();
        })
        .catch(error => {
            console.error(error);
            if (error.message.includes("email")) {
                setError("This email is already in use. Please use a different email.");
                setSuccess("");
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
              required
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
              
              placeholder="Enter your user photo URL"
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
              autoComplete="off"
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
                    <span className="text-success">{success}</span>
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
