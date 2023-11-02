import React from "react";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import RightSIdeBar from "../../components/RightSideBar/RightSIdeBar";
import QuestionDetails from "./QuestionDetails";
import "../../../src/App.css";
const DisplayQuestionsList = ({ slideIn, handleSlideIn, theme }) => {
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
        <QuestionDetails theme={theme} />
        <RightSIdeBar theme={theme} />
      </div>
    </div>
  );
};

export default DisplayQuestionsList;
