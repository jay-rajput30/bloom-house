import React, { useContext } from "react";
import "./index.css";
import { authContext } from "../../context/AuthProvider";
const ProfileDetails = ({ userDetails }) => {
  const { logoutUser } = useContext(authContext);
  return (
    <section className="profile-details">
      <h2>User Details</h2>
      <p>name: {userDetails?.firstName + " " + userDetails?.lastName}</p>
      <p>contact: {userDetails?.phoneNo}</p>
      <button onClick={logoutUser}>logout</button>
    </section>
  );
};

export default ProfileDetails;
