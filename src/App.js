import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Navigate, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {addPost} from "./redux/state";
import Friends from "./Friends/Friends";

function App(props) {
    const shouldRedirect = true;

  return (
        <div className="app-warp">
            <Header />
            <NavBar />
            <div className="app-warp-content">
                <Routes>
                    <Route  path="/" element={shouldRedirect ? (<Navigate replace to="/profile" />) : (<Profile />)
                    } />
                    <Route index path="/profile" element={<Profile state={props.state.profilePage} addPost={addPost} />} />
                    <Route path="/messages/*" element={<Dialogs state={props.state.messagePage} />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
  );
}

export default App;
