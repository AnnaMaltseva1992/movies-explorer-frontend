import React, { useState, useEffect } from "react";
import "./App.css";
import { registration, login, tokenCheck, userEdit } from "../../utils/MainApi";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ErrorNotFound from "../ErrorNotFound/ErrorNotFound";
import AboutProject from "../AboutProject/AboutProject";
import SavedMovies from "../SavedMovies/SavedMovies";
import InfoTool from "../infoToolTip/InfoTool";
import Register from "../Register/Register";
import AboutMe from "../AboutMe/AboutMe";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Techs from "../Techs/Techs";
import Main from "../Main/Main";

function App() {
  const [infoToolTip, setInfoToolTip] = useState({ statusOk: false, text: '', opened: false, })
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleTokenCheck = () => {
      return tokenCheck()
        .then((res) => {
          const { name, email } = res;
          setCurrentUser({
            name,
            email,
          });
          setIsLoggedIn(true);
          navigate(location.pathname, { replace: true });
        })
        .catch((err) => {
          console.log(err)
        });
    };

    if (!isLoggedIn) {
      handleTokenCheck();
    }
  }, [isLoggedIn]);


  function handleRegistration(formValue) {
    return registration(formValue)
      .then((res) => {
        setInfoToolTip({ statusOk: true, text: 'Пользователь зарегистрирован', opened: true, })
        setCurrentUser(res.data);
        handleLogin(formValue);
      })
  }

  function handleLogin(formValue) {
    return login(formValue)
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem("jwt", res.token);
        navigate("/movies", { replace: true });
      })
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
  }

  function handleLogOut() {
    localStorage.clear()
    setIsLoggedIn(false)
    navigate('/', { replace: true })
    setCurrentUser({})
  }

  function handleCloseInfoTooltip() {
    setInfoToolTip({ statusOk: false, text: '', opened: false, })
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
                  setInfoToolTip={setInfoToolTip}
                />
              }
            />
            <Route path="/about-project" element={<AboutProject />} />
            <Route path="/techs" element={<Techs />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route
              path="/signin"
              element={<Login setCurrentUser={setCurrentUser} setInfoToolTip={setInfoToolTip} handleSubmit={handleLogin} />} />
            <Route
              path="/signup"
              element={<Register setInfoToolTip={setInfoToolTip} handleSubmit={handleRegistration} />}
            />
            <Route path="/*" element={<ErrorNotFound />} />
          </Routes>
          <InfoTool
            statusOk={infoToolTip.statusOk}
            text={infoToolTip.text}
            opened={infoToolTip.opened}
            onClose={handleCloseInfoTooltip}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
