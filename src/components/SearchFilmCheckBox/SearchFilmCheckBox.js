import React from "react";
import "./SearchFilmCheckBox.css";

function SearchFilmCheckbox({isShortMovie, onFilter}) {
  return (
    <div className="checkbox">
      <input
        className="checkbox-toggle"
        type="checkbox"
        value={isShortMovie}
        onChange={onFilter}
      />
      <label className="checkbox__label">Короткометражки</label>
    </div>
  );
}

export default SearchFilmCheckbox;
