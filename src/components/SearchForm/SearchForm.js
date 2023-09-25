import React from "react";
import "./SearchForm.css";
import search from "../../images/search-button.svg";
import SearchFilmCheckBox from '../SearchFilmCheckBox/SearchFilmCheckBox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Фильм"
          required
        ></input>
        <button
          className="search__button"
          type="submit">
          <img src={search} alt="Поиск"/>
        </button>
      </form>
      <SearchFilmCheckBox />
    </section>
  );
}

export default SearchForm;
