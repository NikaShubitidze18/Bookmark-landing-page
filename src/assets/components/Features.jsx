import React from "react";

const Features = () => (
  <section className="features">
    <h2>Features</h2>
    <p>
      Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
    </p>
    <div className="tabs">
      <button className="active">Simple Bookmarking</button>
      <button className="features-button">Speedy Searching</button>
      <button className="features-button">Easy Sharing</button>
    </div>
    <div className="feature-content">
      <img src="/images/illustration-features-tab-2.svg" alt="Feature" />
      <div>
        <h3>Bookmark in one click</h3>
        <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.</p>
        <button className="more">More Info</button>
      </div>
    </div>
  </section>
);

export default Features;
