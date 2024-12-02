

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Notification from './components/Notification';
import { MyContext } from "./MyContext";
import { useState } from 'react';
const App = () => {
const [showNotifiationPanel,SetShowNotificationPanel] =useState(true)
const handlePanel =()=>{
  SetShowNotificationPanel(!showNotifiationPanel)
}
  return (
    <MyContext.Provider
    value={{ handlePanel }}
  >
    <BrowserRouter>
      <div className="app">
        {/* Sidebar */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "179px",
            height: "100vh",
            backgroundColor: "#ffffff",
            zIndex: 1000,
            overflowY: "auto",
            padding: "20px 16px",
            border: "1px solid #1C1C1C1A",
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
              ? "calc(100% - 552px)" 
              : "calc(100% - 212px)", 
            backgroundColor: "#ffffff",
            zIndex: 999,
            border: "1px solid #1C1C1C1A",
            padding: "20px 28px",
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
              width: "280px",
              height: "100vh",
              backgroundColor: "#ffffff",
              zIndex: 1000,
              overflowY: "auto",
              padding: "16px 16px",
              border: "1px solid #1C1C1C1A",
            }}
          >
            <Notification />
          </div>
        )}

        {/* Main Content */}
        <div
          style={{
            marginTop: "68px",
            marginLeft: "212px", 
            width: showNotifiationPanel
              ? "calc(100% - 552px)" 
              : "calc(100% - 212px)", 
            overflowY: "auto",
            display: "flex",
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


