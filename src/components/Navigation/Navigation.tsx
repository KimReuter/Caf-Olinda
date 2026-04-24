import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Menü schließen & Scrolled-State korrekt setzen bei Routenwechsel
  useEffect(() => {
    setMenuOpen(false);
    setScrolled(window.scrollY > 40);
  }, [location.pathname]);

  // Scroll-Hintergrund
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body-Scroll sperren wenn Menü offen
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`nav${scrolled || menuOpen ? ' nav--scrolled' : ''}`} aria-label="Hauptnavigation">
      <div className="nav__inner">
        <NavLink to="/" className="nav__wordmark" aria-label="Café Olinda – Startseite">
          Café Olinda
        </NavLink>

        {/* Desktop-Navigation */}
        <ul className="nav__links" role="list">
          <li>
            <NavLink to="/das-cafe" className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}>
              Das Café
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}>
              Menü
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}>
              Kontakt
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className={`nav__overlay${menuOpen ? ' nav__overlay--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="nav__overlay-links" role="list">
          <li>
            <NavLink to="/das-cafe" className={({ isActive }) => `nav__overlay-link${isActive ? ' nav__overlay-link--active' : ''}`}>
              Das Café
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={({ isActive }) => `nav__overlay-link${isActive ? ' nav__overlay-link--active' : ''}`}>
              Menü
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" className={({ isActive }) => `nav__overlay-link${isActive ? ' nav__overlay-link--active' : ''}`}>
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
