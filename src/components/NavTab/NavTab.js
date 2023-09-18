import React from "react";
import {NavLink} from "react-router-dom";
import "./NavTab.css";

function NavTab() {
    return (
        <nav className='nav-tab'>
            <NavLink
                to='/about-project'
                className='nav-tab__link nav-tab__button'>
                О проекте
            </NavLink>
            <NavLink
                to='/techs'
                className='nav-tab__link nav-tab__button'>
                Технологии
            </NavLink>
            <NavLink
                to='/about-me'
                className='nav-tab__link nav-tab__button'>
                Студент
            </NavLink>
        </nav>
    );
}

export default NavTab;