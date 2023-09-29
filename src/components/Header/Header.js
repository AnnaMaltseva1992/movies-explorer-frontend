import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import HeaderNav from "../HeaderNav/HeaderNav";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Logo />
      {isLoggedIn? <HeaderNav /> : <HeaderAuth />}
    </header>
  );
}

export default Header;
