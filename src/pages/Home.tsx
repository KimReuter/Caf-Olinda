import { useEffect, useRef, useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import './Home.css';

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

  // Subtile Parallax
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const y = window.scrollY * 0.025;
      imageRef.current.style.transform = `scale(1.04) translateY(${y}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      </div>
    </Layout>
  );
}
