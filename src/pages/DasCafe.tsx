import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import { useInView } from '../hooks/useInView';
import './DasCafe.css';

// ─── Einfache Body-Textzeile ──────────────────────────
function BodyLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useInView<HTMLParagraphElement>(0.15);
  return (
    <p
      ref={ref}
      className={`das-cafe__body-line fade-up${isVisible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </p>
  );
}

// ─── Praktischer Hinweis ──────────────────────────────
function PracticalLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useInView<HTMLParagraphElement>(0.15);
  return (
    <p
      ref={ref}
      className={`das-cafe__practical-line fade-up${isVisible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </p>
  );
}

export function DasCafe() {
  const [labelVisible, setLabelVisible] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLabelVisible(true), 300);
    const t2 = setTimeout(() => setNameVisible(true), 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <Layout>
      <div className="das-cafe">

        {/* ─── Hero: Text links / Bild blutet nach rechts bis ganz oben ─── */}
        <div className="das-cafe__hero">
          <div className="das-cafe__hero-text">
            {/* Klein: "das café" als Label */}
            <span className={`das-cafe__label fade-in${labelVisible ? ' is-visible' : ''}`}>
              das café
            </span>

            {/* Riesig: "Olinda." */}
            <div className="line-wrap das-cafe__name-wrap">
              <span className={`das-cafe__name${nameVisible ? ' is-visible' : ''}`}>
                Olinda.
              </span>
            </div>
          </div>

          <div className="das-cafe__hero-image" aria-hidden="true">
            <img
              src="/das-cafe.jpg"
              alt=""
              className="das-cafe__hero-img"
            />
          </div>
        </div>

        {/* ─── Body-Text ─────────────────────────────────── */}
        <div className="das-cafe__body">
          <div className="das-cafe__body-inner">
            <p className="das-cafe__intro fade-up is-visible">
              Ein Kaffee, der Zeit hat.
            </p>

            <BodyLine delay={0}>
              Das Café ist ein kleiner Ort in Plauen – entstanden aus zwei Welten,
              irgendwo zwischen Berlin und Olinda.
            </BodyLine>
            <BodyLine delay={80}>
              Eine kleine, kuratierte Auswahl. Frisch gemacht. Ohne Versprechen.
            </BodyLine>
            <BodyLine delay={160}>
              Die Plätze sind begrenzt, manchmal teilt man den Tisch.
              Aus einem Nebeneinander wird manchmal ein Gespräch, manchmal eine Freundschaft.
            </BodyLine>

            <div className="das-cafe__practical-divider" aria-hidden="true" />

            <PracticalLine delay={0}>
              Alles auf der Karte ist vegetarisch oder vegan.
            </PracticalLine>
            <PracticalLine delay={80}>
              Reservierung nicht möglich – man kommt vorbei und schaut ob was frei ist.
            </PracticalLine>
            <PracticalLine delay={160}>
              Das Olinda bleibt, wo es ist – und deshalb bieten wir kein Catering an.
            </PracticalLine>
          </div>
        </div>

      </div>
    </Layout>
  );
}
