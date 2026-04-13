import { Layout } from '../components/Layout/Layout';
import './Legal.css';

export function Impressum() {
  return (
    <Layout>
      <div className="legal">
        <div className="legal__inner">
          <h1 className="legal__heading">Impressum</h1>

          <section className="legal__section">
            <h2 className="legal__subheading">Angaben gemäß § 5 TMG</h2>
            <p>
              Edson da Costa Silva<br />
              Stresemannstraße 22<br />
              08523 Plauen
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__subheading">Kontakt</h2>
            <p>
              Telefon: 0176 31006860<br />
              E-Mail: [E-Mail-Adresse]
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__subheading">Verantwortlich für den Inhalt</h2>
            <p>
              Edson da Costa Silva<br />
              Stresemannstraße 22<br />
              08523 Plauen
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__subheading">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__subheading">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
