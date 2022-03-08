import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Landing, Login, Register, Dashboard, Profile, MyProfile, Job, NotFound } from "./pages"

export default function App() {
  return (
    <Router> 
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/profile/:id" element={<Profile />} /> 
        <Route exact path="/profile/me" element={<MyProfile />} /> 
        <Route exact path="/job/:id" element={<Job />} /> 
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  )
}