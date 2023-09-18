import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a
              href="https://github.com/AnnaMaltseva1992/how-to-learn"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__item">Статичный сайт</p>
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="стрелка"
              />
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://github.com/AnnaMaltseva1992/russian-travel"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__item">Адаптивный сайт</p>
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="стрелка"
              />
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://github.com/AnnaMaltseva1992/react-mesto-api-full-gha"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__item">Одностраничное приложение</p>
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="стрелка"
              />
            </a>
          </li>
        </ul>
    </section>
  );
}

export default Portfolio;
