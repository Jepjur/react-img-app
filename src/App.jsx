import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './pages/site/Home';
import About from "./pages/site/About";
import Services from "./pages/site/Services";
import Contact from "./pages/site/Contact";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

<>
  <Route path="login" element={<Login />} />
  <Route path="signup" element={<Signup />} />
</>

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-title">Lorem Ipsum Header</div>

      <button
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Services
        </Link>
        <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer className="footer">
    © 2025 Lorem Ipsum Inc.
  </footer>
);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4L12 20M12 4L6 10M12 4L18 10"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    )
  );
};

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}
