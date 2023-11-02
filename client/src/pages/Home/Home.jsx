import React from "react";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import HomeMainBar from "../../components/HomeMainBar/HomeMainBar";
import RightSIdeBar from "../../components/RightSideBar/RightSIdeBar";
import "../../../src/App.css";
const Home = ({ slideIn, handleSlideIn, theme }) => {
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
      >
        <HomeMainBar theme={theme} />
        <RightSIdeBar theme={theme} />
      </div>
    </div>
  );
};

export default Home;
