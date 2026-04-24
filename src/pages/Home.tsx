import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { useInView } from '../hooks/useInView';
import './Home.css';

// ─── Pull-Quote ───────────────────────────────────────
function Quote({
  text,
  author,
  delay = 0,
}: {
  text: string;
  author: string;
  delay?: number;
}) {
  const { ref, isVisible } = useInView<HTMLQuoteElement>(0.15);
  return (
    // Echte Bewertungen hier eintragen
    <blockquote
      ref={ref}
      className={`home__quote fade-up${isVisible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="home__quote-mark" aria-hidden="true">„</span>
      <p className="home__quote-text">{text}</p>
      <footer className="home__quote-author">{author}</footer>
    </blockquote>
  );
}

export function Home() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageVisible, setImageVisible] = useState(false);
  const [label, setLabel] = useState(false);
  const [line1, setLine1] = useState(false);
  const [line2, setLine2] = useState(false);
  const [line3, setLine3] = useState(false);

  useEffect(() => {
    const t0 = setTimeout(() => setImageVisible(true), 80);
    const tL = setTimeout(() => setLabel(true), 300);
    const t1 = setTimeout(() => setLine1(true), 600);
    const t2 = setTimeout(() => setLine2(true), 850);
    const t3 = setTimeout(() => setLine3(true), 1100);
    return () => { clearTimeout(t0); clearTimeout(tL); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Subtile Parallax – nur auf Desktop
  useEffect(() => {
    if (window.innerWidth <= 900) return;
    const handleScroll = () => {
      if (!imageRef.current) return;
      const y = window.scrollY * 0.025;
      imageRef.current.style.transform = `scale(1.04) translateY(${y}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teaserInner = useInView<HTMLDivElement>(0.15);

  return (
    <Layout fullHeight>
      <div className="home">
        <div className="home__hero">
          <div
            ref={imageRef}
            className={`home__image${imageVisible ? ' home__image--visible' : ''}`}
            style={{ backgroundImage: 'url(/hero.jpg)' }}
            aria-hidden="true"
          />
          <div className="home__overlay" aria-hidden="true" />

          {/* Kleines Gegengewicht oben rechts */}
          <span className="home__location" aria-hidden="true">Plauen · Vogtland</span>

          <div className="home__headline">
            <p className={`home__label fade-in${label ? ' is-visible' : ''}`}>
              Ein Wohnzimmer für die Stadt.
            </p>
            <div className="line-wrap">
              <span className={line1 ? 'is-visible' : ''}>Ein kleiner Ort.</span>
            </div>
            <div className="line-wrap">
              <em className={line2 ? 'is-visible' : ''}>Guter Kaffee.</em>
            </div>
            <div className="line-wrap">
              <span className={line3 ? 'is-visible' : ''}>Zeit.</span>
            </div>
          </div>
        </div>

        {/* ─── Info-Leiste ─────────────────────────────── */}
        <section className="home__info">
          <div className="home__info-item">
            <p className="home__info-label">Öffnungszeiten</p>
            <p className="home__info-text">Di – Fr &nbsp;8 – 17 Uhr</p>
            <p className="home__info-text">So &nbsp;9 – 15 Uhr</p>
            <p className="home__info-note">Mo &amp; Sa geschlossen</p>
          </div>
          <div className="home__info-item">
            <p className="home__info-label">Adresse</p>
            <a
              href="https://maps.google.com/?q=Stresemannstra%C3%9Fe+22,+08523+Plauen"
              target="_blank"
              rel="noopener noreferrer"
              className="home__info-link"
            >
              <p className="home__info-text">Stresemannstraße 22</p>
              <p className="home__info-text">08523 Plauen</p>
            </a>
          </div>
          <div className="home__info-item">
            <p className="home__info-label">Küche</p>
            <p className="home__info-text">Vegetarisch &amp; vegan.</p>
            <p className="home__info-text">Täglich frisch.</p>
          </div>
        </section>

        {/* ─── Atmosphäre-Grid ─────────────────────────── */}
        <section className="home__gallery" aria-hidden="true">
          {/* Bild hier eintragen: src='/gallery-1.jpg' */}
          <div className="home__gallery-item home__gallery-item--large" />
          {/* Bild hier eintragen: src='/gallery-2.jpg' */}
          <div className="home__gallery-item" />
          {/* Bild hier eintragen: src='/gallery-3.jpg' */}
          <div className="home__gallery-item" />
        </section>

        {/* ─── Speisekarte-Teaser ───────────────────────── */}
        <section className="home__teaser">
          <div
            ref={teaserInner.ref}
            className={`home__teaser-inner fade-up${teaserInner.isVisible ? ' is-visible' : ''}`}
          >
            <p className="home__teaser-intro">
              Brasilianisch. Vegetarisch. Täglich frisch.
            </p>
            <p className="home__teaser-body">
              Espresso und Filterkaffee aus Brasilien, Pão de Queijo, Pastel de Nata —
              und eine wechselnde Auswahl an Snacks und kleinen Gerichten.
              Alles vegetarisch, alles ohne Ausnahme.
            </p>
            <Link to="/menu" className="home__teaser-link">
              Zum Menü
            </Link>
          </div>
        </section>

        {/* ─── Zitate ───────────────────────────────────── */}
        <section className="home__quotes">
          <Quote
            text="Ein Ort, an dem man sofort ankommen möchte. Der Kaffee ist außergewöhnlich gut."
            author="Maria S."
            delay={0}
          />
          <Quote
            text="Sonntags unser Lieblingsplatz in Plauen. Man sitzt zusammen – das mag ich."
            author="Thomas K."
            delay={120}
          />
          <Quote
            text="Das Pão de Queijo ist wirklich außergewöhnlich. Die Atmosphäre macht alles besonders."
            author="Julia M."
            delay={240}
          />
        </section>
      </div>
    </Layout>
  );
}
