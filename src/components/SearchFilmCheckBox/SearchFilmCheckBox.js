import React from "react";
import "./SearchFilmCheckBox.css";

function SearchFilmCheckbox({isShortMovie, onFilter, onClick}) {


console.log('State',isShortMovie)


  return (
    <div className="checkbox">
      <input
        className="checkbox-toggle"
        type="checkbox"
        checked={isShortMovie}
        onChange={onFilter}
        onClick={onClick}
      />
      <label className="checkbox__label">Короткометражки</label>
    </div>
  );
}

export default SearchFilmCheckbox;
