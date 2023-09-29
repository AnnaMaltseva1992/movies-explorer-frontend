import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import { REGEX_EMAIL } from "../../utils/constants";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Profile({ isLoggedIn, handleUserEdit, handleLogOut }) {
  const navigate = useNavigate();
  const userData = useContext(CurrentUserContext);
  const [formValue, setFormValue] = useState({
    name: userData.name || "",
    email: userData.email || "",
  });
  const [formErrorMessage, setFormErrorMessage] = useState({
    name: "",
    email: "",
  });
  const [isSubmitButtonActive, setIsSubmitButtonActive] = useState(true);
  const [isInputDisabled, setInputDisabled] = useState(true);

  useEffect(() => {
    if (
      formValue.name !== userData.name &&
      formValue.email !== userData.email &&
      !formErrorMessage.name &&
      !formErrorMessage.email &&
      formErrorMessage.name == "" &&
      formErrorMessage.email == ""
    ) {
      setIsSubmitButtonActive(true);
    } else {
      setIsSubmitButtonActive(false);
    }
  }, [formValue, userData, formErrorMessage]);

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

function handleUserEditSubmit() {
  handleUserEdit(formValue)
  .then(() => {
    setInputDisabled(true)
  })
}

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <section className="profile">
          <h1 className="profile__title">{`Привет, ${userData.name}!`}</h1>
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
                value={formValue.name}
                required
                disabled={isInputDisabled}
                onChange={handleChangeName}
              />
              <span
                className={`profile__input-error ${
                  formErrorMessage.name.length > 0
                    ? "profile__input-error_active"
                    : ""
                } `}
              >
                {formErrorMessage.name.length > 0 ? formErrorMessage.name : ""}.
              </span>
            </div>
            <div className="profile__form-row">
              <label className="profile__label">E-mail</label>
              <input
                name="email"
                className="profile__input"
                type="email"
                placeholder="E-mail"
                required
                value={formValue.email}
                disabled={isInputDisabled}
                onChange={handleChangeEmail}
              />
              <span
                className={`profile__input-error ${
                  formErrorMessage.email.length > 0
                    ? "profile__input-error_active"
                    : ""
                } `}
              >
                {formErrorMessage.email.length > 0
                  ? formErrorMessage.email
                  : ""}
                .
              </span>
            </div>
            {isInputDisabled ? (
              <>
                <button
                  type="button"
                  className="profile__button profile__button_type_edit"
                  onClick={(e) => {
                    e.preventDefault();
                    setInputDisabled(false);
                  }}
                >
                  Редактировать
                </button>
                <button
                  type="button"
                  className="profile__button profile__button_type_logg-out"
                  onClick={() => handleLogOut()}
                >
                  Выйти из аккаунта
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={handleUserEditSubmit}
                disabled={!isSubmitButtonActive}
                className={`profile__button-save${
                  isSubmitButtonActive ? "" : "_disabled"
                }`}
              >
                Cохранить
              </button>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
