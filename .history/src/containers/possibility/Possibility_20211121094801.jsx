import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1>The po</h1>
      </div>
    </div>
  );
};

export default Possibility;
