import React from "react";
import "./ScrollButton.css";

function ScrollButton({onClick}) {
  return (
    <div className="scroll-movies">
      <button onClick={onClick} className="scroll-movies__button" type="button">
        Ещё
      </button>
    </div>
  );
}

export default ScrollButton;
