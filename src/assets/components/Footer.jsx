import React from "react";

const Footer = () => (
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
          <a href="#"><img src="/images/icon-facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/images/icon-twitter.svg" alt="Twitter" /></a>
        </div>
      </div>
    </footer>
);

export default Footer;
