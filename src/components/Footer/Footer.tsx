import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Spalte 1 – Brand */}
        <div className="footer__col footer__col--brand">
          <p className="footer__wordmark">Café Olinda</p>
          <p className="footer__tagline">Specialty Coffee · Plauen</p>
        </div>

        {/* Spalte 2 – Adresse */}
        <div className="footer__col">
          <span className="footer__label">Adresse</span>
          <address className="footer__address">
            Stresemannstraße 22<br />
            08523 Plauen
          </address>
        </div>

        {/* Spalte 3 – Öffnungszeiten */}
        <div className="footer__col">
          <span className="footer__label">Öffnungszeiten</span>
          <ul className="footer__hours">
            <li><span>Di – Fr</span><span>8:00 – 17:00</span></li>
            <li><span>So</span><span>9:00 – 15:00</span></li>
            <li className="footer__hours-closed"><span>Mo, Sa</span><span>geschlossen</span></li>
          </ul>
        </div>

        {/* Spalte 4 – Navigation */}
        <div className="footer__col">
          <span className="footer__label">Menü</span>
          <nav aria-label="Footer-Navigation">
            <ul className="footer__nav-list">
              <li><NavLink to="/">Start</NavLink></li>
              <li><NavLink to="/das-cafe">Das Café</NavLink></li>
              <li><NavLink to="/menu">Menü</NavLink></li>
              <li><NavLink to="/kontakt">Kontakt</NavLink></li>
            </ul>
          </nav>
        </div>

      </div>

      <div className="footer__bottom">
        <span className="footer__copy">© {new Date().getFullYear()} Café Olinda</span>
        <div className="footer__legal">
          <Link to="/datenschutz">Datenschutz</Link>
          <Link to="/impressum">Impressum</Link>
        </div>
        <button className="footer__totop" onClick={scrollToTop} aria-label="Zurück nach oben">
          ↑
        </button>
      </div>
    </footer>
  );
}
