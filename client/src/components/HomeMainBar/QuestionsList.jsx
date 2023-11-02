import React from 'react'
import QuestionsEach from './QuestionsEach';

const QuestionsList = ({questionList , theme}) => {
  
  return (
    <div>
      {questionList.map((question) => (
               <QuestionsEach question={question} key={question._id} theme={theme}/>
            ))}
    </div>
  )
}

export default QuestionsList
