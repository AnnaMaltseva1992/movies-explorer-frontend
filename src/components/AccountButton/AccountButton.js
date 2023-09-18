import React from "react";
import { NavLink } from "react-router-dom";
import "./AccountButton.css";

function AccountButton() {
  return (
    <NavLink to="/profile" className="account-button">
      Аккаунт
    </NavLink>
  );
}

export default AccountButton;