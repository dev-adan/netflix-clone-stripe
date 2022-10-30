import React from "react";
import "./Profile.css";
import { Nav } from "../../components";
import { auth } from "../../firebase";

const Profile = () => {
  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen__body">
        <h1>Edit profile</h1>

        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />

          <div className="profileScreen__details">
            <h2>adanaligakhar@gmail.com</h2>
            <div className="profileScreen__plans">
            <h3>Plans</h3>
            <Plans/>
              <button onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
