import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <nav className="footer__links">
          <a
            href="https://practicum.yandex.ru"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/yandex-praktikum"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
