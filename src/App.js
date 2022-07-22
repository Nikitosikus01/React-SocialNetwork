import "./App.css";
import React from "react";
import Header from "./components/folderHeader/Header";
import Navbar from "./components/folderNavbar/Navbar";
import Profile from "./components/folderProfile/Profile";
import Dialogs from "./components/folderDialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/folderNews/News";
import Settings from "./components/folderSettings/Settings";


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/dialogs" element={<Dialogs/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
