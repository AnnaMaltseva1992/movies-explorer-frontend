import React, { useState, useEffect } from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const { name, image, duration, trailerLink, savedMovies, movieId, card, handleLike, handleDislike, isSavedMoviePage } =
    props;
  const [isVisible, setIsVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (isSavedMoviePage) {
      const itWasLiked = savedMovies.some((item) => item.movieId === card.movieId)
      setIsLiked(itWasLiked)
    } else {
      const itWasLiked = savedMovies.some((item) => item.movieId === movieId)
      setIsLiked(itWasLiked)
    }
  }, [])

  function handleCardClick() {
    if (isLiked) {
      return handleDislike(movieId)
        .then(() => {
          setIsLiked(false)
          setIsVisible(true)
        })
        .catch((err) => { console.log(err) });
    } else {
      return handleLike(card)
        .then((res) => {
          setIsLiked(true)
          setIsVisible(false)
        })
        .catch((err) => { console.log(err) });
    }
  }

  const handleRemoveFromSaved = () => {
    return handleDislike(movieId)
      .then(() => {
        setIsLiked(false)
        setIsVisible(true)
      })
      .catch((err) => { console.log(err) });
  }

  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

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
      {isSavedMoviePage &&
        <button
          onMouseEnter={() => {
            setIsVisible(true);
          }}
          onMouseLeave={() => {
            setIsVisible(false);
          }}
          type="button"
          onClick={handleRemoveFromSaved}
          className={`card__delete-button ${!isVisible && 'card__delete-button_hidden'}`} />}

      {!isSavedMoviePage &&
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
          className={`card__save-button ${isVisible ? "" : "card__save-button_hidden"
            } ${isLiked ? "card__save-button_active" : ""} `}
        ></button>}
      <div className="card__info">
        <p className="card__name">{name}</p>
        <p className="card__duration">{`${hours}ч ${minutes}м`}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
