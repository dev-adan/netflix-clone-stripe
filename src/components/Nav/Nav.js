import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const Navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav__contents">
        <img
         onClick={() => Navigate('/')}
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt='netflix logo'
        />
        <img
        onClick={() => Navigate('/profile')}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
