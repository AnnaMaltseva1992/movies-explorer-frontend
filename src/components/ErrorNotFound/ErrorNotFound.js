import React from "react";
import { NavLink } from "react-router-dom";
import "./ErrorNotFound.css";

function ErrorNotFound() {
  return (
    <main>
      <section className="error-not-found">
        <h1 className="error-not-found__title">404</h1>
        <p className="error-not-found__text">Страница не найдена</p>
        <NavLink to="/main" className="error-not-found__link">
          Назад
        </NavLink>
      </section>
    </main>
  );
}

export default ErrorNotFound;
