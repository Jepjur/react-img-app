import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './pages/site/Home';
import About from "./pages/site/About";
import Services from "./pages/site/Services";
import Contact from "./pages/site/Contact";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

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
        <Link to="/login" className="nav-link login-icon" onClick={() => setIsMenuOpen(false)} aria-label="Login">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white" viewBox="0 0 24 24">
            <path d="M10.6 16.6 9.5 15.5l2.6-2.6H3v-1.5h9.1L9.5 8.8l1.1-1.1 4.3 4.3-4.3 4.3Zm8.9 4.9H12v-1.5h7.5v-16H12V2h7.5q.625 0 1.063.438Q21 2.875 21 3.5v17q0 .625-.437 1.063-.438.437-1.063.437Z" />
          </svg>
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}
