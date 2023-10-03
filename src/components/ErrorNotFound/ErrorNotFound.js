import React from "react";
import { useNavigate} from "react-router-dom";
import "./ErrorNotFound.css";

function ErrorNotFound() {
  const navigate = useNavigate()
  return (
    <main>
      <section className="error-not-found">
        <h1 className="error-not-found__title">404</h1>
        <p className="error-not-found__text">Страница не найдена</p>
        <button onClick={() => navigate(-1)} className="error-not-found__link">
          Назад
        </button>
      </section>
    </main>
  );
}

export default ErrorNotFound;
