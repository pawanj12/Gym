import { useState, useEffect } from "react";
import { Menu, X, Search, Dumbbell } from "lucide-react";
import navLinks from "./navLinks";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        <div className="logo">
          <Dumbbell size={22} />
          <span>IRON PULSE</span>
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((item) => (
            <a key={item.name} href={item.path}>
              {item.name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="search-btn">
            <Search size={18} />
          </button>

          <a href="/" className="login">
            LOGIN
          </a>

          <button className="join-btn">JOIN NOW</button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>
    </header>
  );
}