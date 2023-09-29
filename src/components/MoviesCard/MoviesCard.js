import React, { useState } from "react";
import "./MoviesCard.css";
import { addMovie, removeMovie } from "../../utils/MainApi";

function MoviesCard(props) {
  const { name, image, duration, trailerLink, savedMovies, movieId, card } =
    props;
  const [isVisible, setIsVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  function handleCardClick() {
    if (isLiked) {
      return removeMovie(movieId)
        .then(() => {
          setIsLiked(false)
        })
        .catch(() => {});
    } else {
      return addMovie(card)
        .then(() => {
          setIsLiked(true)
        })
        .catch(() => {});
    }
  }

  return (
    <li className="card">
      <a
        onMouseEnter={() => {
          setIsVisible(true);
        }}
        onMouseLeave={() => {
          setIsVisible(false);
        }}
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="card__image" alt={name} src={image} />
      </a>
      <button type="button" className="card__delete-button" />
      <button
        onMouseEnter={() => {
          setIsVisible(true);
        }}
        onMouseLeave={() => {
          setIsVisible(false);
        }}
        type="button"
        onClick={() => {
          handleCardClick();
        }}
        className={`card__save-button ${
          isVisible ? "" : "card__save-button_hidden"
        }${isLiked ? "card__save-button_active" : ""} `}
      ></button>
      <div className="card__info">
        <p className="card__name">{name}</p>
        <p className="card__duration">{duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
