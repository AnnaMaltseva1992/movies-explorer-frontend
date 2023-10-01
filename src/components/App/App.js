import React, { useState, useEffect } from "react";
import "./App.css";
import { registration, login, tokenCheck, userEdit, getUserData, getMySavedMovie } from "../../utils/MainApi";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { getInitialMovies } from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ErrorNotFound from "../ErrorNotFound/ErrorNotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import InfoTool from "../infoToolTip/InfoTool";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Main from "../Main/Main";

function App() {
  const [infoToolTip, setInfoToolTip] = useState({ statusOk: false, text: '', opened: false, })
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isFetchingProcess, setIsFetchingProcess] = useState(false);
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
    setIsFetchingProcess(true)
    return registration(formValue)
      .then((res) => {
        setInfoToolTip({ statusOk: true, text: 'Пользователь зарегистрирован', opened: true, })
        setCurrentUser(res.data);
        const { email, password } = formValue
        handleLogin({ email, password });
      })
      .finally(setIsFetchingProcess(false))
  }

  function handleLogin(formValue) {
    setIsFetchingProcess(true)
    return login(formValue)
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem("jwt", res.token);
        navigate("/movies", { replace: true })
        return getUserData()
          .then((res) => {
            setCurrentUser(res);
          });
      })
      .finally(setIsFetchingProcess(false))
  }

  function handleEditProfile(formValue) {
    setIsFetchingProcess(true)
    return userEdit(formValue)
      .then((res) => {
        const { name, email } = res
        setCurrentUser({
          name,
          email
        })
      })
      .finally(setIsFetchingProcess(false))
  }

  function handleLogOut() {
    localStorage.clear()
    setIsLoggedIn(false)
    navigate('/', { replace: true })
    setCurrentUser({})
  }

  const handleGetInitialMovies = () => {
    return getInitialMovies()
      .catch((err) => {
        setInfoToolTip({ statusOk: false, text: 'Что-то пошло не так.', opened: true, })
      })
  };

  const handleGetMySavedMovies = () => {
    return getMySavedMovie()
      .catch((err) => {
        setInfoToolTip({ statusOk: false, text: 'Что-то пошло не так.', opened: true, })
      });
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
                <ProtectedRoute onGetMySavedMovies={handleGetMySavedMovies} onGetInitialMovie={handleGetInitialMovies} isLoggedIn={isLoggedIn} element={Movies} />
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
                  isFetching={isFetchingProcess}
                  element={Profile}
                  setInfoToolTip={setInfoToolTip}
                />
              }
            />
            <Route
              path="/signin"
              element={<ProtectedRoute
                isLoggedIn={!isLoggedIn}
                setCurrentUser={setCurrentUser}
                setInfoToolTip={setInfoToolTip}
                handleSubmit={handleLogin}
                isFetching={isFetchingProcess}
                element={Login}
              />} />

            <Route
              path="/signup"
              element={<ProtectedRoute
                isLoggedIn={!isLoggedIn}
                setInfoToolTip={setInfoToolTip}
                handleSubmit={handleRegistration}
                isFetching={isFetchingProcess}
                element={Register}
              />}
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
