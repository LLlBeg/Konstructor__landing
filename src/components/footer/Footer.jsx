import React from "react";
import "./Footer.css";
import LOGO from "../../assets/image/header__logo.svg";
import FACEBOOK from "../../assets/image/Facebook.svg";
import TWITTER from "../../assets/image/Twitter.svg";
import GOOGLE from "../../assets/image/Google.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer__items">
            <div className="footer__item">
              <p className="footer__item__title">COMPANY</p>
              <a classname="footer__item__logo" href="#nav">
                <img src={LOGO} alt="logo" />
              </a>
              <div className="footer__item__text">
                Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit,
                sed diam nonummy nibh <br />
                euismod tincidunt ut laoreet dolore <br /> magna aliquam erat.
              </div>
            </div>
            <div className="footer__item">
              <p className="footer__item__subtext">LINKS</p>
              <ul className="footer__item__list">
                <li className="footer__item__link">
                  <a href="#nav">HOME</a>
                </li>
                <li className="footer__item__link">
                  <a href="#nav">ABOUT</a>
                </li>
                <li className="footer__item__link">
                  <a href="#nav">SERVICES</a>
                </li>
                <li className="footer__item__link">
                  <a href="#nav">PROJECT</a>
                </li>
                <li className="footer__item__link">
                  <a href="#nav">CONTACT US</a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <ul className="footer__item__list">
                <li className="footer__item__link">
                  <a href="#nav">FAQ</a>
                </li>
                <li className="footer__item__link">
                  <a href="#nav">TERMS</a>
                </li>
                <li className="footer__item__link">
                  <a href="#nav">CAREERS</a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <ul className="footer__item__list">
                <li className="footer__item__link">
                  <a href="#nav">BLOG</a>
                </li>
                <li className="footer__item__link">
                  <a href="#nav">PARTNERS</a>
                </li>
                <li className="footer__item__link">
                  <a href="#nav">NEWS</a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <p className="footer__item__contact">CONTACT US</p>
              <p className="footer__item__contact__text">
                213 Baker Street <br /> Oriel City Kount <br /> 7000 KNW, <br />
                Kountry Name
              </p>
              <a
                className="footer__item__contact__phone"
                href="tel:+239942334022"
              >
                +23 994 233 4022
              </a>
              <a
                className="footer__item__contact__mail"
                href="mail:info@konstruct.com"
              >
                info@konstruct.com
              </a>
            </div>
            <div className="footer__item__social">
              <a
                className="footer__item__social__logo"
                href="https://www.facebook.com/"
                target="blank"
              >
                <img src={FACEBOOK} alt="facebook" />
              </a>
              <a
                className="footer__item__social__logo"
                href="https://twitter.com/?lang=uk"
                target="blank"
              >
                <img src={TWITTER} alt="twitter" />
              </a>
              <a
                className="footer__item__social__logo"
                href="https://www.google.com/"
                target="blank"
              >
                <img src={GOOGLE} alt="google" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="construct">
        <div className="container">
          <div className="construct__title">
            © 2017 Konstruct Inc. Designed by Jane Kathryn Teo
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
