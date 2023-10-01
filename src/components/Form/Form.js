import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import logo from "../../images/logo.svg";

function Form(props) {
  const { title, children, buttonText, question, linkText, link, submitHandler, isButtonDisabled, isFetching } = props;
  return (
    <main>
      <section className="form">
        <Link to="/" className="form__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <h1 className="form__title">{title}</h1>
        <form className="form__container" onSubmit={(e) => {
          e.preventDefault()
          submitHandler()
        }}>
          {children}
          <button disabled={!isButtonDisabled || isFetching} type="submit" className={`form__submit-button${!isButtonDisabled || isFetching? '_disabled' : ''}`} >
            {isFetching? 'Выполняю...' : buttonText}
          </button>
        </form>
        <span className="form__text">
          {question}
          <Link to={link} className="form__link">
            {linkText}
          </Link>
        </span>
      </section>
    </main>
  );
}

export default Form;
