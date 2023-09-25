import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import AccountButton from "../AccountButton/AccountButton";

function Navigation() {

  return (
    <div className="navigation">
      <div className="navigation__overlay" />
      <div className="navigation__container">
        <button className="navigation__close-button" />
        <ul className="navigation__list">
          <li>
            <NavLink to="/" className="navigation__item">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="navigation__item navigation__item_active">
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink to="/saved-movies" className="navigation__item">
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