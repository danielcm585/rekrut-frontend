import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Landing, Login, Register, Dashboard, JobList, Profile, Job } from "./pages";

export default function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/jobs/:list" element={<JobList />} /> */}
        <Route path="/profile/:id" element={<Profile />} /> 
        <Route path="/job/:id" element={<Job />} /> 
      </Routes>
    </Router>
  );
}