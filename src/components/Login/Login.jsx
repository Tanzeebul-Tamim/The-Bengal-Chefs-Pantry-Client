import React, { useContext, useState } from "react";
import "./Login.css";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";

const Login = () => {
  const { googleSignIn, githubSignIn, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch(error => {
        console.error(error);
      })
  }

  const handleGitHubSignIn = () => {
    githubSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.error(error);
      })
  }  

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
        })
        .catch(error => {
            console.error(error)
        })
  }

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-text d-flex justify-content-center container my-5">
      <div style={{ width: "60%" }} className="bg-warning pb-4 rounded-5">
        <div className="text-center">
          <h1 className="py-3 login-title">Login to Your Account</h1>
          <hr className="mx-5" />
        </div>
        <Form onSubmit={handleLogin} className="p-4 d-flex gap-2 flex-column align-items-center">
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
                fontSize: "20px"
              }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {
                <p>
                    <span className="text-danger">error</span>
                </p>
          }

         <div className="mb-2">
            <Button style={{width: "558px", height: "55px"}} type="submit" variant="danger" className="fs-5 mt-3 py-2">Submit</Button> 
         </div>    
          <p>
            Don't have an account? Please{" "}
            <Link style={{ textDecoration: "none" }} to="/register">
              <span className="fw-bold text-danger">Register</span>
            </Link>
          </p>
          <div className="d-flex gap-4">
            <Button onClick={handleGoogleSignIn} className="px-3 py-2">
              <FaGoogle />{" "}
              Login With Google
            </Button>
            <Button onClick={handleGitHubSignIn} className="px-3 py-2" variant="dark">
              <FaGithub />{" "}
              Login With Github
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
