import React, { useState } from "react";
import "./SearchForm.css";
import search from "../../images/search-button.svg";
import SearchFilmCheckBox from '../SearchFilmCheckBox/SearchFilmCheckBox';

function SearchForm({ onFilter, isSavedMoviePage, lastQuery, lastStateCheckbox }) {
  const [query, setQuery] = useState(lastQuery || '')
  const [isShortMovie, setIsShortMovie] = useState(lastStateCheckbox || false)

  const handleChange = (e) => {
    const { value } = e.target
    setQuery(value)
  }

  const handleFilterSubmit = (state) => {
    onFilter(query, state)

  }

  const handleFilterCheckbox = (state) => {
    setIsShortMovie(!isShortMovie)
    onFilter(query, state)
  }

  return (
    <section className="search">
      <form className="search__form"
        onSubmit={(e) => {
          e.preventDefault()
          handleFilterSubmit(isShortMovie)
        }}
      >
        <input
          className="search__input"
          type="text"
          placeholder="Фильм"
          value={query}
          onChange={handleChange}
        ></input>
        <button
          className="search__button"
          type="submit"
        >
          <img src={search} alt="Поиск" />
        </button>
      </form>
      <SearchFilmCheckBox onFilter={() => handleFilterCheckbox(isShortMovie)} isShortMovie={isShortMovie} />
    </section>
  );
}

export default SearchForm;
