import React from "react";
import { NavLink } from "react-router-dom";
import "./NavTab.css";

function NavTab() {
  return (
      <ul className="nav-tab">
        <li className="nav-tab__item">
          <NavLink
            to="/about-project"
            className="nav-tab__link"
          >
            О проекте
          </NavLink>
        </li>
        <li nav-tab__item>
          <NavLink to="/techs" className="nav-tab__link">
            Технологии
          </NavLink>
        </li>
        <li nav-tab__item>
          <NavLink to="/about-me" className="nav-tab__link">
            Студент
          </NavLink>
        </li>
      </ul>
  );
}

export default NavTab;
