import React, { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";

const Profile = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const { user } = useContext(AuthContext);
  console.log(user)

  return (
    <div className="login-text d-flex justify-content-center container my-5">
      <div style={{ width: "60%" }} className="bg-warning pb-4 rounded-5">
        <div className="text-center">
          <h1 className="py-3 login-title">My Profile</h1>
          <hr className="mx-5" />
        </div>
        <div className="p-4 d-flex gap-2 flex-column align-items-center">
          <img
            style={{ height: "150px", width: "150px", borderRadius: "50%" }}
            src={user ? user.photoURL : userDetails?.photoURL}
          />
          <h1>{user ? user.displayName : userDetails.name}</h1>
          <h2>Email: {userDetails.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
