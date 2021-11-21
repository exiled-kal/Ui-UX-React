import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports.js";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      
    </div>
  );
};

export default Brand;
