import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderNav.css";
import AccountButton from "../AccountButton/AccountButton";
import burger from "../../images/burger-menu.svg";
import Navigation from "../Navigation/Navigation";

function HeaderNav() {
  const [isPopupOpened, setIsPopupOpened] = useState(false)

  const handlePopupClose = () => {
    setIsPopupOpened(false)
  }

  return (
    <section className="header-nav">
      <nav className="header-nav__menu">
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
      <button type="button" onClick={() => setIsPopupOpened(true)} className="header-nav__burger-menu">
        <img src={burger} alt="бургер-меню" />
      </button>
      {isPopupOpened && <Navigation isPopupOpened={isPopupOpened} onClose={handlePopupClose} />}
    </section>
  );
}

export default HeaderNav;
