import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard"
import "./MoviesCardList.css";

const MoviesCardList = ({cards}) => {
    return (
        <ul className="movies-card-list">
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
    );
};

export default MoviesCardList;
