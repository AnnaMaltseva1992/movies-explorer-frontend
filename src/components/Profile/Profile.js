import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header />
      <main>
        <section className="profile">
          <h3 className="profile__title">Привет, Анна!</h3>
          <form className="profile__form">
            <div className="profile__form-row">
              <label className="profile__label">Имя</label>
              <input
                name="name"
                className="profile__input"
                type="text"
                minLength="2"
                maxLength="40"
                placeholder="Имя"
                defaultValue="Анна"
                required
              />
              <span className="profile__input-error">
                Что-то пошло не так...
              </span>
            </div>
            <div className="profile__form-row">
              <label className="profile__label">E-mail</label>
              <input
                name="email"
                className="profile__input"
                type="email"
                placeholder="E-mail"
                defaultValue="pochta@yandex.ru"
                required
              />
              <span className="profile__input-error">
                Что-то пошло не так...
              </span>
            </div>
            <button
              type="submit"
              className="profile__button profile__button_type_edit"
            >
              Редактировать
            </button>
            <button
              type="button"
              className="profile__button profile__button_type_logg-out"
            >
              Выйти из аккаунта
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
