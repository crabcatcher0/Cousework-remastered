import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import HostelList from "./components/HostelList";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { AuthProvider } from '../src/auth_context/AuthContext.jsx';


function App() {

  return (
    <>
  <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hostels" element={<HostelList />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      <Footer />
    </Router>    
  </AuthProvider> 
    </>
  )
}

export default App
