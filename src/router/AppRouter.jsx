import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../component/navbar/navbar'
import News from '../component/news/news.jsx';
import PrivateRouter from './PrivateRouter.jsx'
import Login from '../component/login/login.jsx'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<PrivateRouter/>}>
              <Route path="" element = {<News/>}/>
            </Route>
            <Route path="" element = {<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter;