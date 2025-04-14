import React from "react";

const FAQ = () => (
  <section className="faq">
    <h2>Frequently Asked Questions</h2>
    <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
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
    <button className="FAQ-more">More Info</button>
  </section>
);

export default FAQ;
