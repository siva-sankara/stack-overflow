import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestionsList from './pages/Questions/DisplayQuestionsList'
import Tags from './pages/Tags/Tags'
import Users from './pages/User/Users'
import UserProfile from './pages/UserProfile/UserProfile'

const RoutesPage = () => {
  return (
    <div>
        <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/Auth' exact element={<Auth />}/>
            <Route path='/Questions' exact element={<Questions />}/>
            <Route path='/AskQuestion' exact element={<AskQuestion />}/>
            <Route path='/Questions/:id' exact element={<DisplayQuestionsList />}/>
            <Route path='/Tags' exact element={<Tags />}/>
            <Route path='/Users' exact element={<Users />}/>
            <Route path='/Users/:id' exact element={<UserProfile />}/>

        </Routes>
    </div>
  )
}

export default RoutesPage
