import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderNav.css";
import AccountButton from "../AccountButton/AccountButton";
import burger from '../../images/burger-menu.svg';

function HeaderNav() {
  return (
    <>
      <nav className="header-nav">
        <ul className="header-nav__container">
          <li>
            <NavLink to="/movies" className="header-nav__link">
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink to="/saved-movies" className="header-nav__link">
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <AccountButton />
      </nav>
      <button type="button" className="header-nav__burger-menu">
        <img src={burger} alt="бургер-меню" />
      </button>
    </>
  );
}

export default HeaderNav;
