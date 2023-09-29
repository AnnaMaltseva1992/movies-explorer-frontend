import React from "react";
import { useState, useEffect } from "react";
import "./Register.css";
import Form from "../Form/Form";
import { REGEX_EMAIL } from "../../utils/constants";

function Register({ handleSubmit }) {
  const [formValue, setFormValue] = useState({});
  const [formErrorMessage, setFormErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
  });

  const isFormFieldsValid =
    !formErrorMessage.name &&
    !formErrorMessage.email &&
    !formErrorMessage.password &&
    formErrorMessage.name == "" &&
    formErrorMessage.email == "" &&
    formErrorMessage.password == "";

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

  function handleRegistration() {
    handleSubmit(formValue);
  }

  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
      submitHandler={handleRegistration}
      isButtonDisabled={isFormFieldsValid}
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
        <span
          className={`form__error-text ${
            formErrorMessage.name.length > 0 ? "form__error-text_active" : ""
          } `}
        >
          {formErrorMessage.name.length > 0 ? formErrorMessage.name : ""}.
        </span>
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
        <span
          className={`form__error-text ${
            formErrorMessage.email.length > 0 ? "form__error-text_active" : ""
          } `}
        >
          {formErrorMessage.email.length > 0 ? formErrorMessage.email : ""}.
        </span>
      </section>
      <label className="form__label">Пароль</label>
      <section className="form__section">
        <input
          name="password"
          className={`form__input ${
            formErrorMessage.password.length > 0 ? "form__input_error" : ""
          } `}
          type="password"
          required
          placeholder="Пароль"
          onChange={handleChangePassword}
        />
        <span
          className={`form__error-text ${
            formErrorMessage.password.length > 0
              ? "form__error-text_active"
              : ""
          } `}
        >
          {formErrorMessage.password.length > 0
            ? formErrorMessage.password
            : ""}
          .
        </span>
      </section>
    </Form>
  );
}

export default Register;
