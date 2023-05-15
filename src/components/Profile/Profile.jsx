import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  useTitle(`${user.displayName} -`);

  return (
    <div className="login-text d-flex justify-content-center container my-5">
      <div style={{ width: "60%" }} className="bg-warning pb-4 rounded-5">
        <div className="text-center">
          <h1 className="py-3 login-title">My Profile</h1>
          <hr className="mx-5" />
        </div>
        <div className="p-4 d-flex gap-2 flex-column align-items-center">
          <img
            style={{ height: "150px", width: "150px", borderRadius: "50%", border: "5px solid #ffef0f" }}
            src={user.photoURL ? user.photoURL : "https://www.shutterstock.com/image-illustration/leather-background-jpeg-version-260nw-101031550.jpg"}
          />
          <h2><strong>Username:</strong> {user.displayName ? user.displayName : "Not Found"}</h2>
          <h2><strong>Email:</strong> {user.email}</h2>
          <Link to="/updateProfile"><Button variant="dark">Update User Info</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
