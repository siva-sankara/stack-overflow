import React, { useState } from "react";
import "./HomeMainBar.css";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionsList from "./QuestionsList";
import { useSelector } from "react-redux";
import ChatBot from "../chatbot/ChatBot";
import bot from "../../asserts/chatbot.jpg";
import * as api from '../../api'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeMainBar = ({ theme}) => {
  const notify = () => toast("Wow so easy!");

  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
  const [ChatBotIn, setChatBotIn] = useState(false);
  const questionList = useSelector((state) => state.questionsReducer);
  const userLoggedIn =  useSelector((state)=> state.currentUserReducer );
  const DeleteChatInMongoose=async()=>{
    try {
      await api.deleteQuery()
    } catch (error) {
      console.log(error.message);
    }
  }
  if(!ChatBotIn){
    DeleteChatInMongoose();
  }

  const checkAuth = () => {
    if( userLoggedIn === null) { 
      alert("Login required");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  const handleChatBot=()=>{
    if(localStorage.getItem("Profile")){
      setChatBotIn(!ChatBotIn)
    }else{
      navigate('/Auth')
    }
  }

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div className="mainbar-question-container">
        {questionList.data === null ? (
          <h1>Loading ...</h1>
        ) : (
          <>
            <p>{questionList.data.length} questions</p>
            <QuestionsList questionList={questionList.data} theme={theme} />
          </>
        )}
      </div>
      {ChatBotIn && (
        <div className={theme ? "chatBot-up theme-chatBot-up":"chatBot-up"}>
          <div className="chat-container">
            <ChatBot theme={theme}/>
          </div>
        </div>
      )}
      {/* {localStorage.getItem("Profile") && ( */}
        <div className="chatbot-icon">
          <img
            src={bot}
            className="bot-icon"
            onClick={ handleChatBot}
          />
        </div>
      {/* )} */}
    </div>
  );
};

export default HomeMainBar;
