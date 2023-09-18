import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorNotFound from "../ErrorNotFound/ErrorNotFound";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

function App() {

  return (
    <div className="App">
      <div className="page">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/saved-movies" element={<SavedMovies />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/signin" element={<Login />}/>
        <Route path="/signup" element={<Register />}/>
        <Route path="/*" element={<ErrorNotFound />}/>
        <Route path="about-project" element={<AboutProject />}/>
        <Route path="/techs" element={<Techs />}/>
        <Route path="/about-me" element={<AboutMe />}/>
      </Routes>
      </div>
    </div>
    
  );
}

export default App;
