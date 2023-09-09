import React from 'react'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import HomeMainBar from '../../components/HomeMainBar/HomeMainBar'
import RightSIdeBar from '../../components/RightSideBar/RightSIdeBar'
import '../../../src/App.css'
const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSideBar />
      <div className="home-container-2">
        <HomeMainBar />
        <RightSIdeBar />
      </div>
    </div>
  )
}

export default Home
