import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollButton from "../ScrollButton/ScrollButton";
import { cardsListSaved } from "../../utils/constants";
import { getInitialMovies } from "../../utils/MoviesApi";

function Movies({ isLoggedIn, savedMovies, setSavedMovies }) {
  const [initialMovies, setInitialMovies] = useState([]);

  const handleGetInitialMovies = () => {
    return getInitialMovies()
      .then((res) => {
        setInitialMovies(res);
        localStorage.setItem("initialMovies", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetInitialMovies();
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <section className="movies">
          <SearchForm />
          <MoviesCardList
            savedMovies={savedMovies}
            cards={initialMovies}
            flag="add-favorites-btn"
          />
          <ScrollButton cards={cardsListSaved} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
