import React from "react";
import "./newsletter.css";

const NewsSletter = () => {
  return (
    <div className="NewsSletter">
      <div className="NewsSletteHeading">
        <h1>Join our newsletter</h1>
        <p>
          Join over half a million vitamin lovers and get our latest deals,
          articles, and resources!
        </p>
      </div>
      <div className="NewsSletterInput">
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsSletter;
