import React, { useState, useEffect } from "react";
import "./Movies.css";
import { addMovie, removeMovie, getMySavedMovie } from "../../utils/MainApi"
import { getInitialMovies, } from "../../utils/MoviesApi";
import { cardsListSaved } from "../../utils/constants";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ScrollButton from "../ScrollButton/ScrollButton";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies({ isLoggedIn }) {
  const SHORT_FILM_DURATION = 40;
  const NUMBER_OF_MOVIE_DESKTOP = 12;
  const NUMBER_OF_MOVIE_TABLET = 8
  const NUMBER_OF_MOVIE_MOBILE = 5;
  const MOBILE_SIZE = 480;
  const TABLET_SIZE = 768

  const [initialMovies, setInitialMovies] = useState([]);
  const [isEmptyQuery, setIsEmptyQuery] = useState(false);
  const [isEmptyResults, setIsEmptyResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [savedMovies, setSavedMovies] = useState(() => {
    if (localStorage.getItem('savedMovies')) {
      return JSON.parse(localStorage.getItem('savedMovies'))
    } else {
      return [];
    }
  });

  const [movieToRender, setMovieToRender] = useState(() => {
    if (localStorage.getItem('movieToRender')) {
      return JSON.parse(localStorage.getItem('movieToRender'));
    } else {
      return [];
    }
  })

  const handleGetInitialMovies = () => {

    return getInitialMovies()
      .then((res) => {
        setInitialMovies(res);
        localStorage.setItem("initialMovies", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally();
  };

  const handleGetMySavedMovies = () => {
    return getMySavedMovie()
      .then((res) => {
        setSavedMovies(res);
        localStorage.setItem("savedMovies", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    handleGetInitialMovies();
  }, []);

  useEffect(() => {
    handleGetMySavedMovies();
  }, []);

  const handleAddMovie = (movie) => {
    return addMovie(movie)
      .then((res) => {
        setSavedMovies((prev) => [...prev, res])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleRemove = (movieId) => {
    const newMovieId = savedMovies.find((item) => item.movieId === movieId)
    return removeMovie(newMovieId._id)
      .then((res) => {
        const newSavedMovie = savedMovies.filter((item) => item.movieId !== movieId)
        setSavedMovies(newSavedMovie)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleFilter = (query, isShortMovie) => {
    setIsLoading(true)
    if (query === '') {
      setIsEmptyQuery(true)
      setIsLoading(false)
    } else {
      setIsEmptyQuery(false)
      localStorage.setItem('query', query)
      localStorage.setItem('isShortMovie', isShortMovie)
      const filteredMovie = initialMovies.filter((movie) => {
        const isIncluded = movie.nameRU.toLowerCase().includes(query.toLowerCase());
        const isShort = movie.duration <= SHORT_FILM_DURATION;
        if (isShortMovie) {
          return isIncluded && isShort;
        } else {
          return isIncluded;
        }
      })

      if (filteredMovie.length === 0) {
        setIsLoading(false)
        setIsEmptyResults(true)
      }
      else {
        setIsEmptyResults(false)
        setMovieToRender(filteredMovie)
        localStorage.setItem('movieToRender', JSON.stringify(filteredMovie))
        setIsLoading(false)
      }
    }
  }

  const [visibleMovies, setVisibleMovies] = useState(NUMBER_OF_MOVIE_DESKTOP);

  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const screenWidth = window.innerWidth;
        let visibleCount;
        if (screenWidth < MOBILE_SIZE) {
          visibleCount = NUMBER_OF_MOVIE_MOBILE;
        } else if (screenWidth < TABLET_SIZE) {
          visibleCount = NUMBER_OF_MOVIE_TABLET;
        } else visibleCount = NUMBER_OF_MOVIE_DESKTOP;
        setVisibleMovies(visibleCount);
      }, 500);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLoadMore = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < MOBILE_SIZE) {
      setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + NUMBER_OF_MOVIE_MOBILE);
    } else {
      setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + NUMBER_OF_MOVIE_DESKTOP);
    }
  };

  const renderedMovies = movieToRender.slice(0, visibleMovies);
  const lastQuery = localStorage.getItem('query')
  const lastStateCheckbox = localStorage.getItem('isShortMovie') === 'false'

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
  },[savedMovies])

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <section className="movies">
          <SearchForm lastQuery={lastQuery} lastStateCheckbox={lastStateCheckbox} isSavedMoviePage={false} onFilter={handleFilter} />
          {isEmptyQuery ? <span className="movies__error-empty" >Нужно ввести ключевое слово</span>
            : isEmptyResults ? <span className="movies__error-empty">Ничего не найдено</span> : isLoading ? <Preloader /> : <>
              <MoviesCardList
                setSavedMovies={setSavedMovies}
                handleLike={handleAddMovie}
                handleDislike={handleRemove}
                savedMovies={savedMovies}
                cards={renderedMovies}
                isSavedMoviePage={false}
                flag="add-favorites-btn"
              />
              {movieToRender.length > visibleMovies && <ScrollButton onClick={handleLoadMore} cards={cardsListSaved} />}
            </>}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
