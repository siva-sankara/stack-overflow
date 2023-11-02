import React from "react";
import "../../App.css";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import RightSIdeBar from "../../components/RightSideBar/RightSIdeBar";
import QuestionDetails from "./QuestionDetails";

const Questions = ({ slideIn, handleSlideIn, theme }) => {
  return (
    <div className="home-container-1">
      <LeftSideBar
        slideIn={slideIn}
        handleSlideIn={handleSlideIn}
        theme={theme}
      />
      <div className="home-container-2">
        <QuestionDetails theme={theme} />
        <RightSIdeBar theme={theme} />
      </div>
    </div>
  );
};

export default Questions;
