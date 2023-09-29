import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = ({ cards, savedMovies }) => {
  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {cards.map((card) => (
          <MoviesCard
            savedMovies={savedMovies}
            key={card.id}
            movieId={card.id}
            duration={card.duration}
            image={`https://api.nomoreparties.co/${card.image.url}`}
            trailerLink={card.trailerLink}
            name={card.nameRU}
            card={card}
          />
        ))}
      </ul>
    </section>
  );
};

export default MoviesCardList;
