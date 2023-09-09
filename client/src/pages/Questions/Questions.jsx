import React from 'react'
import '../../App.css'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import RightSIdeBar from '../../components/RightSideBar/RightSIdeBar'
import QuestionDetails from './QuestionDetails'

const Questions = () => {
    return (
        <div className='home-container-1'>
          <LeftSideBar />
          <div className="home-container-2">
            <QuestionDetails/>
            <RightSIdeBar />
          </div>
        </div>
      )
}

export default Questions
