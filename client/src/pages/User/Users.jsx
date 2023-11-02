import React from "react";
import "./Users.css";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import { useLocation } from "react-router-dom";
import UsersList from "./UsersList";
const Users = ({ slideIn, handleSlideIn, theme }) => {
  return (
    <div
      className={theme ? "home-container-1 theme-set-c-1" : "home-container-1"}
    >
      <LeftSideBar
        slideIn={slideIn}
        handleSlideIn={handleSlideIn}
        theme={theme}
      />
      <div
        className={
          theme ? "home-container-2 theme-set-c-2" : "home-container-2"
        }
        style={{ marginTop: "30px" }}
      >
        <h1 style={{ fontWeight: "400" }}> Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
