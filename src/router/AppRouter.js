import {BrowserRouter as Router, Route,Routes} from "react-router-dom"

import Main from "../pages/Main"

import Login from "../pages/Login"
import Register from "../pages/Register"


import React from 'react'
import Navbar from "../components/Navbar"
import MovieDetail from "../pages/MovieDetail"

const AppRouter = () => {
  return (
<Router>

    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/details/:id" element={<MovieDetail></MovieDetail>}></Route>
    </Routes>
</Router>
  )
}

export default AppRouter

