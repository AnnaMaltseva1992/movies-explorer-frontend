import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";
import AccountButton from "../AccountButton/AccountButton";

function Navigation({ onClose, isPopupOpened }) {
  const location = useLocation();

  const isMoviePage = location.pathname === '/movies'
  const isSavedMoviePage = location.pathname === '/saved-movies'
  const isMainPage = location.pathname === '/'

  return (
    <div className='navigation'>
      <div className="navigation__overlay" />
      <div className="navigation__container">
        <button className="navigation__close-button" onClick={onClose} />
        <ul className="navigation__list">
          <li>
            <NavLink to="/" className={`navigation__item ${isMainPage && 'navigation__item_active'}`}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={`navigation__item ${isMoviePage && 'navigation__item_active'}`}>
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink to="/saved-movies" className={`navigation__item ${isSavedMoviePage && 'navigation__item_active'}`}>
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
        <AccountButton />
      </div>
    </div>
  );
}

export default Navigation;