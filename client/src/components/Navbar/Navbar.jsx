import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../asserts/logo.png";
import search from "../../asserts/search-solid.svg";
import Avatar from "../Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../actions/CurrentUser";
import decode from 'jwt-decode'
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  var user = useSelector((state) => state.currentUserReducer);
  
  const handleLogout =()=>{
    dispatch({type : "LOGOUT" });
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(() => {
    const token = user?.result.token;
    if (token) {
      const  decodeToken = decode(token)
      if(decodeToken.exp = 1000 < new Date().getTime()){
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" className="search-icon" width={18} />
        </form>

        {user === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
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
            <button className="nav-item nav-links" onClick={handleLogout}>Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
