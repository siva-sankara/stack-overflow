import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../asserts/logo.png";
import search from "../../asserts/search-solid.svg";
import Avatar from "../Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../actions/CurrentUser";
import decode from "jwt-decode";
import bars from "../../asserts/bars-solid.svg";
const Navbar = ({ handleSlideIn, theme, handleTheme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.currentUserReducer);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodeToken = decode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
  }, [user?.token, dispatch]);
  return (
    <nav className={theme ?" main-nav nav-theme-set": "main-nav"}>
      <div className="navbar">
        <button className="slide-in-icon" onClick={handleSlideIn}>
          <img src={bars} alt="bars" width="15" />
        </button>
        <div className="navbar-1">
          <Link to="/" className={theme ?"nav-item nav-logo theme-set ":"nav-item nav-logo"}>
            <img src={logo} alt="logo" />
          </Link>

          <Link to="/Subscription" className={theme ?"nav-item nav-btn res-nav theme-set":"nav-item nav-btn res-nav"}>
            Subscription
          </Link>
          <Link to="/" className={theme ?"nav-item nav-btn res-nav  theme-set":"nav-item nav-btn res-nav "}>
            Products
          </Link>
          <Link to="/" className={theme ?"nav-item nav-btn res-nav theme-set":"nav-item nav-btn res-nav"}>
            For Team
          </Link>
          <form>
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" className="search-icon" width="18" />
          </form>
        </div>
        <div className="navbar-2">
          {user === null ? (
            <div>
              <button className={theme ? "light-theme" : "dark-theme"} onClick={()=>handleTheme()}>
                {theme ? "Light" : "Dark "}
              </button>
              <Link to="/Auth" className="nav-item nav-links">
                Log in
              </Link>
            </div>
          ) : (
            <>
              <button className={theme ? "light-theme" : "dark-theme"} onClick={()=>handleTheme()}>
                {theme ? "Light" : "Dark "}
              </button>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="12px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/Users/${user.result?._id}`}
                >
                  {user?.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-item nav-links" onClick={handleLogout}>
                Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
