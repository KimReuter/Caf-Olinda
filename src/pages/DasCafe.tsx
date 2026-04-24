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

  useEffect(() => {
    const t1 = setTimeout(() => setLabelVisible(true), 300);
    return () => { clearTimeout(t1); };
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

            {/* Riesig: "Olinda." – Buchstaben erscheinen nacheinander */}
            <div className="das-cafe__name-wrap">
              <span className="das-cafe__name" aria-label="Olinda.">
                {[...'Olinda.'].map((letter, i) => (
                  <span
                    key={i}
                    className="das-cafe__name-letter"
                    style={{ animationDelay: `${400 + i * 110}ms` }}
                  >
                    {letter}
                  </span>
                ))}
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
              irgendwo zwischen Berlin und Olinda. Vor über zwanzig Jahren begann die
              Geschichte in Brasilien, wo sich Junior und Anne-Kathrin kennenlernten.
            </BodyLine>
            <BodyLine delay={80}>
              Dreizehn Jahre Berlin, ein erstes Café Olinda – dann das Vogtland.
              Anne-Kathrin übernahm eine Zahnarztpraxis in Plauen, Junior brachte
              das Café mit. Anfang 2024 öffnete es seine Türen, an Juniors Geburtstag.
            </BodyLine>
            <BodyLine delay={160}>
              Die Möbel kommen größtenteils aus der Stadt, die Wände erzählen
              von weiter her. Dazwischen: eine kleine, kuratierte Auswahl.
              Frisch gemacht. Ohne Versprechen.
            </BodyLine>
            <BodyLine delay={240}>
              Die Plätze sind begrenzt, manchmal teilt man den Tisch.
              Aus einem Nebeneinander wird manchmal ein Gespräch, manchmal eine Freundschaft.
            </BodyLine>
          </div>

        </div>

        {/* ─── Feature: Bild links randlos + Punkte rechts gestapelt ── */}
        <div className="das-cafe__feature">
          <div className="das-cafe__feature-image" aria-hidden="true">
            {/* Bild eintragen: <img src="/das-cafe.jpg" alt="" className="das-cafe__feature-img" /> */}
          </div>
          <div className="das-cafe__feature-lines">
            <PracticalLine delay={0}>
              Vegetarisch &amp; vegan. Ohne Ausnahme.
            </PracticalLine>
            <PracticalLine delay={80}>
              Keine Reservierung. Einfach reinkommen.
            </PracticalLine>
            <PracticalLine delay={160}>
              Kein Catering. Wir bleiben, wo wir sind.
            </PracticalLine>
          </div>
        </div>

      </div>
    </Layout>
  );
}
