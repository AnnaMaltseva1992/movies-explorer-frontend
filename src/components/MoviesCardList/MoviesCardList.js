import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = ({ cards }) => {
  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {cards.map((card) => (
          <MoviesCard
            key={card.movieId}
            movieId={card.movieId}
            duration={card.duration}
            image={card.image}
            name={card.nameRU}
          />
        ))}
      </ul>
    </section>
  );
};

export default MoviesCardList;
