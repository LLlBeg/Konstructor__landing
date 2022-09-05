import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="newsletter__item">
          <h3 className="newsletter__title"> Newsletter Signup</h3>
          <div className="newsletter__sign">
            <input
              className="newsletter__input"
              type="text"
              placeholder="test@youremail.com"
            />
            <button className="newsletter__btn">SIGNUP</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
