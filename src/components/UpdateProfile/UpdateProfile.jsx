import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../authProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { EmailAuthProvider, getAuth, reauthenticateWithCredential, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { toast } from "react-toastify";

const auth = getAuth(app);

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  useTitle("Update Profile -");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const updateName = event => {
    event.preventDefault(); 
    const name = event.target.name.value;   
    updateProfile(auth.currentUser, { 
      displayName: name
    })
        .then(() => {
            toast.success("Username updated!", {
                position: "top-left",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            event.target.name.value = "";
        })
        .catch((e) => {
            console.error(e);
        });
        setEmailError("");
        setError("");  
  }

  const updatePhoto = event => {
    event.preventDefault(); 
    const photo = event.target.photo.value;   
    updateProfile(auth.currentUser, { 
      photoURL: photo
    })
        .then(() => {
            toast.success("User Photo updated!", {
                position: "top-left",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            event.target.photo.value = "";
        })
        .catch((e) => {
            console.error(e);
        });
        setEmailError("");
        setError("");  
  }

  const updateEMail = event => {
      event.preventDefault(); 
      const email = event.target.email.value;   
      
      const credential = EmailAuthProvider.credential(
          auth.currentUser.email,
          prompt("Please enter your password to continue")
      );  
      reauthenticateWithCredential(auth.currentUser, credential)
          .then(() => {
              return updateEmail(auth.currentUser, email);
          })
          .then(() => {
              toast.success("User Email updated!", {
                  position: "top-left",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
              });
              event.target.email.value = "";
          })
          .catch((e) => {
              console.error(e);
              if (e.code === 'auth/email-already-in-use') {
                setEmailError("This email has already been used");
              } else if (error.code === 'auth/invalid-email') {
                setEmailError("Provide a valid email");
              }
          });
          setEmailError("");
          setError("");  
  }

  const updatePass = event => {
      event.preventDefault(); 
      const password = event.target.newPassword.value;   
      
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

      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        prompt("Please enter your password to continue")
      );
      
      reauthenticateWithCredential(auth.currentUser, credential)
          .then(() => {
              return updatePassword(auth.currentUser, password);
          })
          .then(() => {
              toast.success("Password updated!", {
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
          })
          .catch((e) => {
              console.error(e);
          });
          setEmailError("");
          setError("");  
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-text d-flex justify-content-center container my-5">
      <div style={{ width: "60%" }} className="bg-warning pb-4 rounded-5">
        <div className="text-center">
          <h1 className="py-3 login-title">Update Profile</h1>
          <hr className="mx-5" />
        </div>
        <div
          className="p-4 d-flex gap-2 flex-column align-items-center"
        > 
          <Form onSubmit={updateName} className="mb-2" style={{ position: "relative" }}>
            <h4 className="fw-bold">Name</h4>
            <input
              className="rounded-4 p-4"
              style={{
                height: "65px",
                width: "485px",
                border: "none",
              }}
              required
              placeholder="Enter your new name"
              type="text"
              name="name"
            />
            <Button type="submit" variant="dark" className="ms-3">Save</Button>
          </Form>    
          <Form onSubmit={updatePhoto} className="mb-2" style={{ position: "relative" }}>
            <h4 className="fw-bold">Photo URL</h4>
            <input
              className="rounded-4 p-4"
              style={{
                height: "65px",
                width: "485px",
                border: "none",
              }}
              required
              placeholder="Enter your new user photo URL"
              type="text"
              name="photo"
            />
             <Button type="submit" variant="dark" className="ms-3">Save</Button>
          </Form>    
          <Form onSubmit={updateEMail} className="mb-2" style={{ position: "relative" }}>
            <h4 className="fw-bold">Email Address</h4>
            <input
              className="rounded-4 p-4"
              style={{
                height: "65px",
                width: "485px",
                border: "none",
              }}
              required
              placeholder="Enter your new email address"
              type="email"
              name="email"
            />
             <Button type="submit" variant="dark" className="ms-3">Save</Button>
          </Form>
            <span className="text-danger">
              {emailError}
            </span>
          <Form onSubmit={updatePass} style={{ position: "relative" }}>
            <h4 className="fw-bold">Reset Password</h4>
            <input
              className="rounded-4 p-4"
              style={{
                height: "65px",
                width: "485px",
                border: "none",
              }}
              autoComplete="off"
              required
              placeholder="Enter your new password"
              type={showPassword ? "text" : "password"}
              name="newPassword"
            />
             <Button type="submit" variant="dark" className="ms-3">Save</Button>
            <div
              style={{
                position: "absolute",
                top: "55%",
                right: "95px",
                cursor: "pointer",
                fontSize: "20px",
              }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </Form>
          <span className="text-danger">{error}</span>     
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
