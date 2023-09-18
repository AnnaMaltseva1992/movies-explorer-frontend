import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { cardsList } from "../../utils/constants";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollButton from "../ScrollButton/ScrollButton";
import { cardsListSaved } from "../../utils/constants";


function Movies() {
  return (
    <>
      <Header />
      <main className="content">
        <div className="movies">
          <SearchForm/>
          <MoviesCardList cards={cardsList} flag="add-favorites-btn"/>
          <ScrollButton cards={cardsListSaved}/>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
