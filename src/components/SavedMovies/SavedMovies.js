import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { cardsListSaved } from "../../utils/constants";

function SavedMovies({isLoggedIn}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <section className="saved-movies">
          <SearchForm />
          <MoviesCardList cards={cardsListSaved} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
