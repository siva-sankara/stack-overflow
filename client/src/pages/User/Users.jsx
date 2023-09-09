import React from "react";
import "./Users.css";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import { useLocation } from "react-router-dom";
import UsersList from "./UsersList";
const Users = () => {
  const location = useLocation();

  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2 user-container" style={{marginTop:"30px"}}>
        <h1 style={{fontWeight:400}}> Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
