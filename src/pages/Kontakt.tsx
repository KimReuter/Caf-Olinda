import { Layout } from '../components/Layout/Layout';
import { useInView } from '../hooks/useInView';
import './Kontakt.css';

export function Kontakt() {
  const { ref: headRef, isVisible: headVisible } = useInView<HTMLHeadingElement>(0.2);
  const { ref: addrRef, isVisible: addrVisible } = useInView<HTMLDivElement>(0.15);
  const { ref: hoursRef, isVisible: hoursVisible } = useInView<HTMLDivElement>(0.15);

  return (
    <Layout>
      <div className="kontakt">
        <div className="kontakt__inner">
          <header className="kontakt__header">
            <h1
              ref={headRef}
              className={`kontakt__heading fade-up${headVisible ? ' is-visible' : ''}`}
            >
              Kontakt
            </h1>
          </header>

          <div className="kontakt__grid">
            {/* Adresse */}
            <div
              ref={addrRef}
              className={`kontakt__block fade-up${addrVisible ? ' is-visible' : ''}`}
            >
              <h2 className="kontakt__block-label">Adresse</h2>
              <address className="kontakt__address">
                Café Olinda<br />
                Stresemannstraße 22<br />
                08523 Plauen
              </address>
            </div>

            {/* Öffnungszeiten */}
            <div
              ref={hoursRef}
              className={`kontakt__block fade-up${hoursVisible ? ' is-visible' : ''}`}
              data-delay="1"
            >
              <h2 className="kontakt__block-label">Öffnungszeiten</h2>
              <dl className="kontakt__hours">
                <div className="kontakt__hours-row">
                  <dt>Di – Fr</dt>
                  <dd>8:00 – 17:00</dd>
                </div>
                <div className="kontakt__hours-row">
                  <dt>So</dt>
                  <dd>9:00 – 15:00</dd>
                </div>
                <div className="kontakt__hours-row">
                  <dt>Mo, Sa</dt>
                  <dd>geschlossen</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Karte */}
          <div className="kontakt__map-wrap">
            <iframe
              className="kontakt__map"
              title="Café Olinda auf der Karte"
              src="https://www.openstreetmap.org/export/embed.html?bbox=12.127%2C50.494%2C12.145%2C50.504&amp;layer=mapnik&amp;marker=50.4991%2C12.1360"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
