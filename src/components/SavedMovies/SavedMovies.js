import React, { useState } from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { removeMovie } from "../../utils/MainApi";

function SavedMovies({ isLoggedIn }) {
  const SHORT_FILM_DURATION = 40;
  const [savedMovies, setSavedMovies] = useState(() => {
    return JSON.parse(localStorage.getItem('savedMovies')) || []
  })
  const [movieToRender, setMovieToRender] = useState(savedMovies)
  const [isEmptyQuery, setIsEmptyQuery] = useState(false);
  const [isEmptyResults, setIsEmptyResults] = useState(false)

  const handleDislike = (movieId) => {
    return removeMovie(movieId)
      .then((res) => {
        const newSavedMovie = movieToRender.filter((item) => item._id !== movieId)
        setMovieToRender(newSavedMovie)
        setSavedMovies(newSavedMovie)
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovie))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleFilter = (query, isShortMovie) => {
    if (query === '') {
      setIsEmptyQuery(true)
    } else {
      setIsEmptyQuery(false)
      const filteredMovie = savedMovies.filter((movie) => {
        const isIncluded = movie.nameRU.toLowerCase().includes(query.toLowerCase());
        const isShort = movie.duration <= SHORT_FILM_DURATION;
        if (isShortMovie) {
          return isIncluded && isShort;
        } else {
          return isIncluded;
        }
      });

      if (filteredMovie.length === 0) {
        setIsEmptyResults(true)
      }
      else {
        setIsEmptyResults(false)
        setMovieToRender(filteredMovie)
      }
    }
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <section className="saved-movies">
          <SearchForm isSavedMoviePage={true} onFilter={handleFilter} />
          {isEmptyQuery ? <span className="movies__error-empty" >Нужно ввести ключевое слово</span>
            : isEmptyResults ? <span className="movies__error-empty">Ничего не найдено</span> :
              <MoviesCardList handleDislike={handleDislike} isSavedMoviePage={true} savedMovies={savedMovies} cards={movieToRender} />}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
