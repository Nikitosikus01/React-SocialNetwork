import "./App.css";
import React from "react";
import Header from "./components/folderHeader/Header";
import Navbar from "./components/folderNavbar/Navbar";
import Profile from "./components/folderProfile/Profile";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Profile/>
      
    </div>
  );
}

export default App;
