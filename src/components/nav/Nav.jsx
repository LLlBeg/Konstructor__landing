import React from "react";
import "./Nav.css";
import LOGO from "../../assets/image/logo.svg";

function Nav() {
  return (
    <div className="nav" id="nav">
      <div className="container">
        <div className="nav__item">
          <img className="nav__logo" src={LOGO} alt="" />
          <nav className="nav__item__list">
            <ul className="nav__list">
              <li className="nav__list__items">
                <a className="nav__list__link" href="#nav">
                  HOME
                </a>
              </li>
              <li className="nav__list__items">
                <a className="nav__list__link" href="#nav">
                  ABOUT
                </a>
              </li>
              <li className="nav__list__items">
                <a className="nav__list__link" href="#nav">
                  SERVICES
                </a>
              </li>
              <li className="nav__list__items">
                <a className="nav__list__link" href="#nav">
                  WORK
                </a>
              </li>
              <li className="nav__list__items">
                <a className="nav__list__link" href="#nav">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
