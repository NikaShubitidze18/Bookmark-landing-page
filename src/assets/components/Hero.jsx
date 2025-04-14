import React from "react";
import illustration from "/images/illustration-features-tab-1.svg";

const Hero = () => (
  <section className="hero">
    <div className="hero-text">
      <h1>A Simple Bookmark Manager</h1>
      <p>
        A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
      </p>
      <div className="hero-buttons">
        <button className="chrome-btn">Get it on Chrome</button>
        <button className="firefox-btn">Get it on Firefox</button>

      </div>
    </div>
    <div className="hero-img">
      <img src={illustration} alt="Hero" />
    </div>
  </section>
);

export default Hero;
