import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import HostelList from "./components/HostelList";

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hostels" element={<HostelList />}/>
      </Routes>
    </Router>      
    </>
  )
}

export default App
