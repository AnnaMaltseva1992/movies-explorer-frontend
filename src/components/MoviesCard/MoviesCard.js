import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const { name, image, duration } = props;

  return (
    <li className="card">
      <img className="card__image" alt={name} src={image} />
      <button type="button" className="card__delete-button" />
      <button
        type="button"
        className="card__save-button card__save-button_active"
      >
      </button>
      <div className="card__info">
        <p className="card__name">{name}</p>
        <p className="card__duration">{duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
