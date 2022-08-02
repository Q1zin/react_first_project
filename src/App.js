import React from 'react'
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-warp">
        <Header />
        <NavBar />
        <Profile />
    </div>
  );
}

export default App;
