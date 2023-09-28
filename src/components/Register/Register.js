import React from "react";
import { useState, useEffect } from "react";
import "./Register.css";
import Form from "../Form/Form";
import { REGEX_EMAIL } from "../../utils/constants";
import { registration } from "../../utils/authApi";

function Register() {
  const [formValue, setFormValue] = useState({});
  const [formErrorMessage, setFormErrorMessage] = useState({});

  function handleChangeName(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });

    setFormErrorMessage({
      ...formErrorMessage,
      [name]: e.target.validationMessage,
    });
  }

  function handleChangeEmail(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });

    if (value.length > 0) {
      const isValid = REGEX_EMAIL.test(value);
      setFormErrorMessage({
        ...formErrorMessage,
        [name]: isValid ? "" : "Некорректный формат email",
      });
    }
  }

  function handleChangePassword(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });

    setFormErrorMessage({
      ...formErrorMessage,
      [name]: e.target.validationMessage,
    });
  }

  // useEffect(() => {
  //   console.log(formErrorMessage);
  // }, [formValue, formErrorMessage]);

  function handleRegistration() {
    console.log('Registration',formValue);
    return registration(formValue)
      .then(() => console.log("registr Ok"))
      .catch(() => console.log("registr False"));
  }

  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
      submitHandler={handleRegistration}
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
          placeholder="Имя"
          onChange={handleChangeName}
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
          placeholder="E-mail"
          onChange={handleChangeEmail}
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
          placeholder="Пароль"
          onChange={handleChangePassword}
        />
        <span className="form__error-text form__error-text_active">
          Что-то пошло не так...
        </span>
      </section>
    </Form>
  );
}

export default Register;
