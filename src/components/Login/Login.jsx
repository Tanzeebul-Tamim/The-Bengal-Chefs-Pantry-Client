import React, { useContext, useState } from "react";
import "./Login.css";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { useRef } from "react";

const auth = getAuth(app);

const Login = () => {
  const { setLoading, googleSignIn, githubSignIn, signIn, logOut  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const emailRef = useRef();
  useTitle("Login -");
  
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      })
  }

  const handleGitHubSignIn = () => {
    githubSignIn()
      .then(result => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
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
            if (!createdUser.emailVerified) {
              logOut();
              setError(`Please verify your email from the verification email sent to ${createdUser.email}`);
              return;
            }
            navigate(from, { replace: true });
            console.log(createdUser);
        })
        .catch(error => {
            console.error(error);
            if(error.code === 'auth/wrong-password') {             
              setError("Incorrect password!");
              setLoading(false);
            }
            else if (error.code === 'auth/user-not-found') {
                setError("User not found! Enter a verified email.");
                setLoading(false);
            }
            else if (error.code === 'auth/too-many-requests') {
              setError("Too many unsuccessful attempts! Try again later.");
              setLoading(false);
            }

        });
  }

  const handlePasswordReset = event => {
    event.preventDefault();
    const email = emailRef.current.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`A password reset email has been sent to ${email}`, {
          position: "top-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      });
          event.target.newPassword.value = "";
      }).catch(error => {
        console.error(error);
        if (error.code === "auth/missing-email") {
          setError("Please enter your verified email first");
          setLoading(false);
        }
        else if (error.code === 'auth/user-not-found') {
          setError("User not found! Enter a verified email.");
          setLoading(false);
        }
        else if (error.code === 'auth/too-many-requests') {
          setError("Too many unsuccessful attempts! Try again later.");
          setLoading(false);
        }
      });
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
              ref={emailRef}
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
              autoComplete="off"
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
                <span className="text-danger">
                  {error}
                </span>
            </p>
          }

          <span>
            <Button variant="link" onClick={handlePasswordReset} style={{textDecoration: "none", color: "#dc3545"}}>
              <strong>Forgot Password?</strong>
            </Button>
          </span>
          
         <div className="mb-2">
            <Button style={{width: "558px", height: "55px"}} type="submit" variant="danger" className="fs-5 py-2">Submit</Button> 
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
