import React from "react";
import "./Story.css";
import PHOTO1 from "../../assets/image/Plan.svg";
import PHOTO2 from "../../assets/image/Manage.svg";
import PHOTO3 from "../../assets/image/Build.svg";

const Story = () => {
  return (
    <div className="story">
      <div className="container">
        <h2 className="story_title">OUR STORY</h2>
        <hr />
        <div className="story__item">
          <div className="srory__item__text">
            <p className="story__item__title__text">
              Founded in 2011 by John Mathew Smith,
              <a href="#header">Konstruct</a> has become the number one
              construction management firm
            </p>
            <p className="story__item__subtitle__text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat.
            </p>
          </div>
          <div className="story__item__image">
            <img src={PHOTO1} alt="We Plan" />
            <img src={PHOTO2} alt="We Manage" />
            <img src={PHOTO3} alt="We Build" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
