import React from "react";
import "./LeftSideBar.css";
import Globe from "../../asserts/Globe.svg";
import { NavLink } from "react-router-dom";
const LeftSideBar = ({ slideIn, handleSlideIn , theme }) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };
  return (
    <div
      className={theme ?"left-sidebar theme-left-sidebar":"left-sidebar"}
      style={slideIn ? slideInStyle : slideOutStyle}
    >
      <nav className="side-nav">
        <button onClick={() => handleSlideIn()} className="nav-btn">
          <NavLink to="/" className="side-nav-links">
            <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeClass="active"
              // style={{ paddingLeft: "10px" }}
            >
              <img src={Globe} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}>Questions</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeClass="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Tags</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeClass="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Users</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Subscription"
              className="side-nav-links"
              activeClass="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Subscription</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;
