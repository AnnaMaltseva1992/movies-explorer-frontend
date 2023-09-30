import React, { useState, useEffect } from "react";
import "./App.css";
import { registration, login, tokenCheck, userEdit } from "../../utils/MainApi";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ErrorNotFound from "../ErrorNotFound/ErrorNotFound";
import AboutProject from "../AboutProject/AboutProject";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import AboutMe from "../AboutMe/AboutMe";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Techs from "../Techs/Techs";
import Main from "../Main/Main";


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleTokenCheck = () => {
    return tokenCheck()
      .then((res) => {
        const { name, email } = res;
        setCurrentUser({
          name,
          email,
        });
        setIsLoggedIn(true);
        navigate(location, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!isLoggedIn) {
      handleTokenCheck();
    }
  }, [isLoggedIn]);

  function handleRegistration(formValue) {
    return registration(formValue)
      .then((res) => {
        setCurrentUser(res.data);
        return handleLogin(formValue);
      })
      .catch((err) => console.log("registr False", err.message));
  }

  function handleLogin(formValue) {
    return login(formValue)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        navigate("/movies", { replace: true });
        handleTokenCheck()
      })
      .catch(() => console.log("registr False"));
  }

  function handleEditProfile(formValue) {
    return userEdit(formValue)
      .then((res) => {
        const { name, email } = res
        setCurrentUser({
          name,
          email
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogOut() {
    localStorage.clear()
    setIsLoggedIn(false)
    navigate('/', { replace: true })
    setCurrentUser({})
  }

  return (
    <div className="App">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} element={Movies} />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} element={SavedMovies} />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  handleUserEdit={handleEditProfile}
                  handleLogOut={handleLogOut}
                  element={Profile}
                />
              }
            />
            <Route path="/about-project" element={<AboutProject />} />
            <Route path="/techs" element={<Techs />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/signin" element={<Login setCurrentUser={setCurrentUser} handleSubmit={handleLogin} />} />
            <Route
              path="/signup"
              element={<Register handleSubmit={handleRegistration} />}
            />
            <Route path="/*" element={<ErrorNotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
