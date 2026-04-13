import { useEffect, useRef, useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import './Home.css';

export function Home() {
  const imageRef = useRef<HTMLDivElement>(null);
  const sentenceRef = useRef<HTMLParagraphElement>(null);
  const [imageVisible, setImageVisible] = useState(false);
  const [sentenceVisible, setSentenceVisible] = useState(false);

  useEffect(() => {
    // Bild erscheint zuerst
    const t1 = setTimeout(() => setImageVisible(true), 80);
    // Satz folgt ruhig danach
    const t2 = setTimeout(() => setSentenceVisible(true), 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Parallax
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
        {/* Hero */}
        <div className="home__hero">
          <div
            ref={imageRef}
            className={`home__image${imageVisible ? ' home__image--visible' : ''}`}
            style={{ backgroundImage: 'url(/hero.jpg)' }}
            aria-hidden="true"
          />
          <div className="home__overlay" aria-hidden="true" />

          {/* Einziger Satz */}
          <p
            ref={sentenceRef}
            className={`home__sentence${sentenceVisible ? ' home__sentence--visible' : ''}`}
          >
            Ein kleiner Ort.{' '}
            <em>Guter Kaffee.</em>{' '}
            Zeit.
          </p>
        </div>
      </div>
    </Layout>
  );
}
