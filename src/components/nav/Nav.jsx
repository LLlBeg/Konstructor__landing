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
                <a className="nav__list__link" href="">
                  HOME
                </a>
              </li>
              <li className="nav__list__items">
                <a className="nav__list__link" href="">
                  ABOUT
                </a>
              </li>
              <li className="nav__list__items">
                <a className="nav__list__link" href="">
                  SERVICES
                </a>
              </li>
              <li className="nav__list__items">
                <a className="nav__list__link" href="">
                  WORK
                </a>
              </li>
              <li className="nav__list__items">
                <a className="nav__list__link" href="">
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
