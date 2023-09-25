import React from "react";
import "./SearchFilmCheckBox.css";

function SearchFilmCheckbox() {
  return (
    <div className="checkbox">
      <input
        className="checkbox-toggle"
        type="checkbox"
      />
      <label className="checkbox__label">Короткометражки</label>
    </div>
  );
}

export default SearchFilmCheckbox;
