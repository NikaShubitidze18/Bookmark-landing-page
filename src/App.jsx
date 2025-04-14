import React from "react";
import Hero from "./assets/components/Hero";
import Features from "./assets/components/Features";
import Download from "./assets/components/Download";
import FAQ from "./assets/components/FAQ";
import Footer from "./assets/components/Footer";
import NavBar from "./assets/Navbar/navbar"; // თქვენი ნავბარი
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <NavBar />  {/* ნავბარის დამატება */}
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Footer />
    </React.StrictMode>
  );
}

export default App;

