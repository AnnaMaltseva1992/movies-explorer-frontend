import React, { useState } from "react";
import "./Register.css";
import { REGEX_EMAIL } from "../../utils/constants";
import Form from "../Form/Form";

function Register({ handleSubmit, setInfoToolTip }) {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrorMessage, setFormErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState('')

  const isFormFieldsValid =
    formErrorMessage.name == "" &&
    formErrorMessage.email == "" &&
    formErrorMessage.password == "" &&
    formValue.password !== '' &&
    formValue.email !== '' &&
    formValue.name !== '';

  function handleChangeName(e) {
    setErrorMessage('')
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
    setErrorMessage('')
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
    setErrorMessage('')
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
    handleSubmit(formValue)
      .catch((err) => {
        setInfoToolTip({ text: err, statusOk: false, opened: true })
        switch (err) {
          case 'Ошибка: 409':
            setErrorMessage('Пользователь с таким email уже существует.');
            break;
          default:
            setErrorMessage('При регистрации пользователя произошла ошибка.');
            break;
        }
      });
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
          className={`form__error-text ${formErrorMessage.name.length > 0 ? "form__error-text_active" : ""
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
          className={`form__error-text ${formErrorMessage.email.length > 0 ? "form__error-text_active" : ""
            } `}
        >
          {formErrorMessage.email.length > 0 ? formErrorMessage.email : ""}.
        </span>
      </section>
      <label className="form__label">Пароль</label>
      <section className="form__section">
        <input
          name="password"
          className={`form__input ${formErrorMessage.password.length > 0 ? "form__input_error" : ""
            } `}
          type="password"
          required
          placeholder="Пароль"
          onChange={handleChangePassword}
        />
        <span
          className={`form__error-text ${formErrorMessage.password.length > 0
            ? "form__error-text_active"
            : ""
            } `}
        >
          {formErrorMessage.password.length > 0
            ? formErrorMessage.password
            : ""}
          .
        </span>
        {errorMessage.length > 0 && <span className="form__error">{errorMessage}</span>}
      </section>
    </Form>
  );
}

export default Register;
