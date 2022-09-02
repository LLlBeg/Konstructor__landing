import React from "react";
import "./Capabilities.css";
import ICON1 from "../../assets/image/icon_1.svg";
import ICON2 from "../../assets/image/icon_2.svg";
import ICON3 from "../../assets/image/icon_3.svg";

function Capabilities() {
  return (
    <div className="capabilities">
      <div className="container">
        <div className="capabilities__item">
          <div className="capabilities__item__title">
            <h2 className="capabilities__item__title__text">
              OUR CAPABILITIES
            </h2>
            <hr className="capabilities__item__line" />
          </div>
          <div className="capabilities__item__subtitle">
            <p className="capabilities__item__subtitle__text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              <br />
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
            <button className="capabilities__item__subtitle__btn">
              ALL SERVICES
            </button>
          </div>
        </div>
        <div className="capabilities__box">
          <div className="capabilities__box__card">
            <img src={ICON1} alt="icon_1" />
            <h4 className="capabilities__box__card_title">
              PROJECT AND CONSTRUCTION MANAGEMENT
            </h4>
            <p className="capabilities__box__card_subtitle">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </div>
          <div className="capabilities__box__card">
            <img src={ICON2} alt="icon_2" />
            <h4 className="capabilities__box__card_title">
              STRUCTURE AUDIT AND MAINTENANCE
            </h4>
            <p className="capabilities__box__card_subtitle">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </div>
          <div className="capabilities__box__card">
            <img src={ICON3} alt="icon_3" />
            <h4 className="capabilities__box__card_title">
              FACTORY CONSTRUCTION AND MODELING
            </h4>
            <p className="capabilities__box__card_subtitle">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
