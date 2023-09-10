import * as api from "../api/index";
export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllQuestios());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllQuestios = () => async (dispatch) => {
  try {
    const { data } = await api.getAllQuestion();
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestion = (id, navigate)=>async(dispatch)=>{
  try {
    await api.deleteQuestion(id)
    dispatch(fetchAllQuestios());
    navigate('/')
  } catch (error) {
    console.log(error);
  }
}

export const voteQuestion = (id ,value, userId) =>async(dispatch)=>{
  try {
    await api.voteQuestion(id ,value, userId)
    dispatch(fetchAllQuestios());
  } catch (error) {
    console.log(error);
  }
}

export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData;
    const { data } = await api.postAnswer(
      id,
      noOfAnswers,
      answerBody,
      userAnswered,
      userId
    );
    dispatch({ type: "POST_ANSWER", payload : data });
    dispatch(fetchAllQuestios());
  } catch (error) {
    console.log(error);
  }
};




export const deleteAnswer=(id, answerId, noOfAnswers)=>async(dispatch)=>{
  try {
    await api.deleteAnswer(id, answerId, noOfAnswers)
    dispatch(fetchAllQuestios())
  } catch (error) {
    console.log(error);
  }
}


