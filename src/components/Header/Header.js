import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

function Header() {
  return (
    <header className="header">
      <Logo />
      <HeaderAuth />
    </header>
  );
}

export default Header;
