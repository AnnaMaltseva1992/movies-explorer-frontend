import React from "react";
import "./Login.css";
import Form from "../Form/Form";

function Login() {

  
  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/signup"
    >
      <label className="form__label">E-mail</label>
      <section className="form__section">
        <input
          name="email"
          className="form__input"
          type="email"
          minLength="2"
          maxLength="40"
          required
          placeholder="E-mail"
        />
        <span className="form__error-text">Что-то пошло не так...</span>
      </section>
      <label className="form__label">Пароль</label>
      <section className="form__section">
        <input
          name="password"
          className="form__input"
          type="password"
          minLength="2"
          maxLength="40"
          required
          placeholder="Пароль"
        />
        <span className="form__error-text">Что-то пошло не так...</span>
      </section>
    </Form>
  );
}

export default Login;
