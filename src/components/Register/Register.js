import React from "react";
import "./Register.css";
import Form from "../Form/Form";

function Register() {
  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
    >
      <label className="form__label">Имя</label>
      <section className="form__section">
        <input
          name="name"
          className="form__input"
          type="text"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__error-text">Что-то пошло не так...</span>
      </section>
      <label className="form__label">E-mail</label>
      <section className="form__section">
        <input
          name="email"
          className="form__input"
          type="email"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__error-text">Что-то пошло не так...</span>
      </section>
      <label className="form__label">Пароль</label>
      <section className="form__section">
        <input
          name="password"
          className="form__input form__input_error"
          type="password"
          required
        />
        <span className="form__error-text form__error-text_active">Что-то пошло не так...</span>
      </section>
    </Form>
  );
}

export default Register;
