import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = ({ cards, savedMovies, handleLike,handleDislike, isSavedMoviePage }) => {

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        { cards.map((card) => (
          <MoviesCard
            savedMovies={savedMovies}
            key={card.id}
            movieId={isSavedMoviePage? card._id :card.id}
            duration={card.duration}
            image={isSavedMoviePage? card.image : `https://api.nomoreparties.co/${card.image.url}`}
            trailerLink={card.trailerLink}
            name={card.nameRU}
            card={card}
            handleLike={handleLike}
            handleDislike={handleDislike}
            isSavedMoviePage={isSavedMoviePage}
          />
        ))}
      </ul>
    </section>
  );
};

export default MoviesCardList;
