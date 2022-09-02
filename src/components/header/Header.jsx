import React from "react";
import "./Header.css";
import LOGO from "../../assets/image/header__logo.svg";

function Header() {
  return (
    <>
      <div className="header" id="header">
        <div className="container">
          <a href="#nav">
            <img className="header__logo" src={LOGO} alt="header__logo" />
          </a>
          <h1>PARTNER WITH KONSTRUCT </h1>
          <p className="header__text">
            An award-winning construction management firm
          </p>
          <a href="#nav">
            <p className="header__text_down">SCROLL DOWN</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
