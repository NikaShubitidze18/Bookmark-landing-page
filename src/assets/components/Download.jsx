import React from "react";

const Download = () => (
  <section className="download">
    <h2>Download the extension</h2>
    <p>We’ve got more browsers in the pipeline. Please let us know if you’ve got a favourite you’d like us to prioritize.</p>
    <div className="browser-cards">
      <div className="card">
        <img src="/images/logo-chrome.svg" alt="Chrome" />
        <h3>Add to Chrome</h3>
        <p>Minimum version 62</p>
        <button>Add & Install Extension</button>
      </div>
      <div className="card">
        <img src="/images/logo-firefox.svg" alt="Firefox" />
        <h3>Add to Firefox</h3>
        <p>Minimum version 55</p>
        <button>Add & Install Extension</button>
      </div>
      <div className="card">
        <img src="/images/logo-opera.svg" alt="opera" />
        <h3>Add to  <br /> opera </h3>
        <p>Minimum version 46</p>
        <button>Add & Install Extension</button>
      </div>
    </div>
  </section>
);

export default Download;
