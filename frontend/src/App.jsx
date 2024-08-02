import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Hostels from "./pages/Hostels";

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hostels" element={<Hostels />}/>
      </Routes>
    </Router>      
    </>
  )
}

export default App
