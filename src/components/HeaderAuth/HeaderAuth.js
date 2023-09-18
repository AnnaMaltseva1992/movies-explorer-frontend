import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderAuth.css";

function HeaderAuth() {
    return (
        <div className="header-auth">
            <NavLink to="/signup" className="header-auth__signup-button">Регистрация</NavLink>
            <NavLink to="/signin" className="header-auth__signin-button">Войти</NavLink>
        </div>
    );
}

export default HeaderAuth;
