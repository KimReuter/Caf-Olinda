import { Layout } from '../components/Layout/Layout';
import './Legal.css';

export function Datenschutz() {
  return (
    <Layout>
      <div className="legal">
        <div className="legal__inner">
          <h1 className="legal__heading">Datenschutz&shy;erklärung</h1>

          <section className="legal__section">
            <h2 className="legal__subheading">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Edson da Costa Silva<br />
              Stresemannstraße 22<br />
              08523 Plauen<br />
              E-Mail: [E-Mail-Adresse]
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__subheading">2. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Abruf der Website werden automatisch Verbindungsdaten (IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite) an Vercel übermittelt. Diese Daten werden zur Bereitstellung des Dienstes benötigt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__subheading">3. Schriftarten (Google Fonts)</h2>
            <p>
              Diese Website verwendet Schriftarten von Google Fonts. Die Schriftarten werden beim Laden der Seite von Google-Servern abgerufen, wobei Ihre IP-Adresse an Google übermittelt wird. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einheitlichen Darstellung).
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__subheading">4. Karte (OpenStreetMap)</h2>
            <p>
              Auf der Kontaktseite ist eine Karte von OpenStreetMap eingebettet. Beim Laden der Karte wird Ihre IP-Adresse an die Openstreetmap Foundation (OSMF), St John's Innovation Centre, Cowley Road, Cambridge, CB4 0WS, UK übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__subheading">5. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit. Zur Ausübung dieser Rechte wenden Sie sich bitte an die oben genannte Kontaktadresse. Zudem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__subheading">6. Cookies</h2>
            <p>
              Diese Website verwendet keine Cookies und kein Tracking.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
