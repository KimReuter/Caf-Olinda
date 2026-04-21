import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import { useInView } from '../hooks/useInView';
import './DasCafe.css';

// ─── Zeilenweise Headline-Animation ──────────────────
function HeadlineLine({ children, visible, delay = 0, italic = false }: {
  children: React.ReactNode;
  visible: boolean;
  delay?: number;
  italic?: boolean;
}) {
  return (
    <div className="line-wrap">
      {italic
        ? <em className={`das-cafe__display-line${visible ? ' is-visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>{children}</em>
        : <span className={`das-cafe__display-line${visible ? ' is-visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>{children}</span>
      }
    </div>
  );
}

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
  const [line1, setLine1] = useState(false);
  const [line2, setLine2] = useState(false);
  const [line3, setLine3] = useState(false);
  const { ref: dividerRef, isVisible: dividerVisible } = useInView<HTMLDivElement>(0.3);

  useEffect(() => {
    const t1 = setTimeout(() => setLine1(true), 200);
    const t2 = setTimeout(() => setLine2(true), 480);
    const t3 = setTimeout(() => setLine3(true), 720);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <Layout>
      <div className="das-cafe">

        {/* ─── Hero: Text links / Bild blutet nach rechts ─── */}
        <div className="das-cafe__hero">
          <div className="das-cafe__hero-text">
            <HeadlineLine visible={line1} delay={0}>Das</HeadlineLine>
            <HeadlineLine visible={line2} delay={0} italic>Café</HeadlineLine>
            <div
              ref={dividerRef}
              className={`das-cafe__divider fade-in${dividerVisible ? ' is-visible' : ''}`}
              aria-hidden="true"
            />
            <HeadlineLine visible={line3} delay={0}>Olinda.</HeadlineLine>
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
