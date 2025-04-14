import React from "react";
import "./Home.css";

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <div className="hero-text">
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for free.
          </p>
          <div className="cta-buttons">
            <button className="chrome-btn">Get it on Chrome</button>
            <button className="firefox-btn">Get it on Firefox</button>
          </div>
        </div>
        <div className="hero-img">
          <img src="/images/illustration-hero.svg" alt="Bookmark preview" />
        </div>
      </header>

      <section className="features">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.
        </p>
        <div className="tabs">
          <button className="active">Simple Bookmarking</button>
          <button>Speedy Searching</button>
          <button>Easy Sharing</button>
        </div>
        <div className="feature-content">
          <img src="/images/illustration-features-tab-2.svg" alt="Bookmarking screenshot" />
          <div>
            <h3>Bookmark in one click</h3>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop interface
              gives you complete control over how you manage your favourite sites.
            </p>
            <button className="info-btn">More Info</button>
          </div>
        </div>
      </section>

      <section className="download">
        <h2>Download the extension</h2>
        <p>
          We've got more browsers in the pipeline. Please do let us know if you've got a favourite
          you'd like us to prioritize.
        </p>
        <div className="browser-cards">
          <div className="card">
            <img src="/images/logo-chrome.svg" alt="Chrome logo" />
            <h4>Add to Chrome</h4>
            <p>Minimum version 62</p>
            <button>Add & Install Extension</button>
          </div>
          <div className="card">
            <img src="/images/logo-firefox.svg" alt="Firefox logo" />
            <h4>Add to Firefox</h4>
            <p>Minimum version 55</p>
            <button>Add & Install Extension</button>
          </div>
          <div className="card">
            <img src="/images/logo-opera.svg" alt="Opera logo" />
            <h4>Add to Opera</h4>
            <p>Minimum version 46</p>
            <button>Add & Install Extension</button>
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
        <div className="accordion">
          <details>
            <summary>What is Bookmark?</summary>
            <p>Bookmark is a simple browser extension that helps you save and organize your favourite websites.</p>
          </details>
          <details>
            <summary>How can I request a new browser?</summary>
            <p>You can send us feedback via the contact form on our website.</p>
          </details>
          <details>
            <summary>Is there a mobile app?</summary>
            <p>We are working on it! Stay tuned for updates.</p>
          </details>
          <details>
            <summary>What about other Chromium browsers?</summary>
            <p>Our extension works with all Chromium-based browsers, including Brave and Edge.</p>
          </details>
        </div>
        <button className="info-btn">More Info</button>
      </section>

    <footer className="footer">
    <div className="newsletter">
        <p className="joined">35.000+ already joined</p>
        <h2 className="headline">Stay up-to-date with what we’re doing</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address." />
          <button type="submit">Contact Us</button>
        </form>
      </div>

      <div className="footer-bottom">
        <div className="logo">📘 BOOKMARK</div>
        <nav className="footer-nav">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
        <div className="socials">
          <a href="#"><img src="facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="twitter.svg" alt="Twitter" /></a>
        </div>
      </div>
    </footer>
   </div>
  );
}
