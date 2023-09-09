import React from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import Avatar from "../../components/Avatar/Avatar";
import { deleteAnswer } from "../../actions/Question";

const DisplayAnswer = ({ question, handleShare }) => {
  const dispatch  = useDispatch()
  const user = useSelector((state) => state.currentUserReducer);
  const {id} = useParams()
  const handleDelete=(answerId , noOfAnswers)=>{
    dispatch(deleteAnswer(id, answerId ,noOfAnswers - 1))
  }
  return (
    <div>
      {question.answer.map((ans) => {
        return (
          <div className="display-ans" key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className="question-action-user">
              <div>
                <button
                  type="button"
                  className="edit-question-btn"
                  onClick={handleShare}
                >
                  Share
                </button>
                {user?.result?._id === ans?.userId && (
                  <button type="button" onClick={()=>handleDelete(ans._id,question.noOfAnswers)}>
                    Delete
                  </button>
                )}
              </div>
              <div>
                <p>answered {moment(ans.answeredOn).fromNow()}</p>
                <Link
                  className="user-link"
                  to={`/Users/${ans.userId}`}
                  style={{ color: "#0086d8" }}
                >
                  <Avatar backgroundColor="green" px="10px" py="10px">
                    {ans.userAnswered.charAt(0).toUpperCase()}
                  </Avatar>

                  <div>{ans.userAnswered}</div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayAnswer;
