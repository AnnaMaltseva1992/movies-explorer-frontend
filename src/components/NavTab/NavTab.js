import React from "react";
import { Link } from 'react-scroll';
import "./NavTab.css";

function NavTab() {
  return (
    <ul className="nav-tab">
      <li className="nav-tab__item">
        <Link
          to="about-project"
          className="nav-tab__link"
          smooth={true}
          duration={500}
        >
          О проекте
        </Link>
      </li>
      <li nav-tab__item>
        <Link to="techs"
          className="nav-tab__link"
          smooth={true}
          duration={500}
        >
          Технологии
        </Link>
      </li>
      <li nav-tab__item>
        <Link to="aboutme"
          className="nav-tab__link"
          smooth={true}
          duration={500}
        >
          Студент
        </Link>
      </li>
    </ul>
  );
}

export default NavTab;
