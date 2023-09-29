import React, { useState } from "react";
import "./Login.css";
import Form from "../Form/Form";
import { login } from "../../utils/authApi";
import { REGEX_EMAIL } from "../../utils/constants";

function Login({ handleSubmit }) {
  const [formValue, setFormValue] = useState({});
  const [formErrorMessage, setFormErrorMessage] = useState({
    email: "",
    password: "",
  });

  const isFormFieldsValid =
    !formErrorMessage.email &&
    !formErrorMessage.password &&
    formErrorMessage.email == "" &&
    formErrorMessage.password == "";

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

  function handleLogin() {
    handleSubmit(formValue);
  }

  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/signup"
      submitHandler={handleLogin}
      isButtonDisabled={isFormFieldsValid}
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
          onChange={handleChangeEmail}
        />
        <span
          className={`form__error-text ${
            formErrorMessage.email.length > 0 ? "form__error-text_active" : ""
          } `}
        >
          {formErrorMessage.email.length > 0 ? formErrorMessage.email : ""}
        </span>
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

export default Login;
