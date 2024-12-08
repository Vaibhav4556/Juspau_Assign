

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Notification from './components/Notification';
import { MyContext } from "./MyContext";
import { useState,useEffect } from 'react';
import { useMediaQuery } from "@mui/material";
const App = () => {
const [showNotifiationPanel,SetShowNotificationPanel] =useState(false)

const handlePanel =()=>{
  SetShowNotificationPanel(!showNotifiationPanel)
}

const handleDarkTheme =()=>{
  setDark(!dark)
  console.log("executed")
}
const [dark, setDark] = useState(
  localStorage.getItem("selectedTheme") === "dark"
);

// Toggle theme function
const toggleTheme = () => {
  const newTheme = !dark; // Toggle current theme
  setDark(newTheme); // Update state
  localStorage.setItem("selectedTheme", newTheme ? "dark" : "light"); // Save preference
};




  return (
    <MyContext.Provider
    value={{ handlePanel,showNotifiationPanel,dark,handleDarkTheme,toggleTheme }}
  >
    <BrowserRouter>
      <div className="app" style={{background:dark?"black":"#ffffff",minHeight:"93vh"}}>
        {/* Sidebar */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "180px",
            height: "100vh",
            backgroundColor: "#ffffff",
            zIndex: 1000,
            overflowY: "auto",
            padding: "20px 16px",
            border: "1px solid #1C1C1C1A",
            borderColor:dark?"#FFFFFF1A":"#1C1C1C1A",
            background:dark?"#000000":""
          }}
        
        >
          <Sidebar />
        </div>

        {/* Topbar */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: "212px", 
            width: showNotifiationPanel
              ? "calc(100% - 550px )" 
              : "calc(100% - 268px)", 
              
            backgroundColor: "#ffffff",
            zIndex: 999,
            border: "1px solid #1C1C1C1A",
            padding: "20px 28px",
            background:dark?"#000000":"#ffffff",
            borderColor:dark?"#FFFFFF1A":"#1C1C1C1A",
           
          }}
        >
          <Topbar />
        </div>

        {/* Notification Panel */}
        {showNotifiationPanel && (
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "248px",
              
              height: "100vh",
              backgroundColor: "#ffffff",
              zIndex: 1000,
              overflowY: "auto",
              padding: "16px 16px",
              border: "1px solid #1C1C1C1A",
              borderColor:dark?"#FFFFFF1A":"#1C1C1C1A",
              background:dark?"black":"#ffffff"
            }}
         
          >
            <Notification />
          </div>
        )}

        {/* Main Content */}
        <div
          style={{
            marginTop: "60px",
            marginLeft: "212px", 
            width: showNotifiationPanel
              ? "calc(100% - 492px)" 
              : "calc(100% - 212px)", 
            overflowY: "auto",
            display: "flex",
            padding:"28px 0px"
          }}
        >
          <div className="main-content" style={{ width: "100%" }}>
            <Routes>
              {/* Define your routes here */}
              <Route path="/" element={<Home />} />
              <Route path="/orderlist" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;


