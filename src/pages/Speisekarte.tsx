import { useInView } from '../hooks/useInView';
import { Layout } from '../components/Layout/Layout';
import './Speisekarte.css';

// Highlight-Items – imageSrc wird eingetragen sobald Fotos vorliegen
const highlights = [
  { id: 'cappuccino',          name: 'Cappuccino',                 category: 'Heiß',     imageSrc: '' },
  { id: 'coldbrew',            name: 'Coldbrew',                   category: 'Cold',     imageSrc: '' },
  { id: 'pastel-de-nata',      name: 'Pastel de Nata',             category: 'Gebäck',   imageSrc: '' },
  { id: 'saft',                name: 'Frisch gepresster Saft',     category: 'Kalt',     imageSrc: '' },
  { id: 'mascarpone-maracuja', name: 'Mascarpone-Maracuja-Kuchen', category: 'Gebäck',   imageSrc: '' },
  { id: 'bagel',               name: 'Bagel',                      category: 'Herzhaft', imageSrc: '' },
];

// Grobe Übersicht – bewusst unvollständig, kein Preis
const overview = [
  {
    label: 'Heiße Getränke',
    items: 'Espresso · Doppio · Americano · Latte Macchiato · Cappuccino · Milchkaffee · Café Bon Bon · Chai Latte · Tee · Schokolade',
  },
  {
    label: 'Cold Coffee',
    items: 'Five Elephants Kenia Coldbrew · Ice Americano · Ice Americano + Tonic · Ice Latte',
  },
  {
    label: 'Kalt',
    items: 'Mineralwasser · Gua Limo · Fritz Cola · Frisch gepresster Saft · Brasilianischer Saft Guave oder Açaí',
  },
  {
    label: 'Baguette, Focaccia & Croissant',
    items: 'mit Ziegenkäse oder Mozzarella · Rucola · getrocknete Tomate · Olivenöl',
  },
  {
    label: 'Bagels',
    items: 'Räuchertofu, Aubergine & Avocado · Frischkäse',
  },
  {
    label: 'Herzhaftes',
    items: 'Käse-Empanada · Bolinhas fritas · Coxinha de Soja',
  },
  {
    label: 'Süßes Gebäck',
    items: 'Pastel de Nata · Mascarpone-Maracuja-Kuchen · Pão de Mel · Schokocroissant',
  },
];

function HighlightCard({ name, category, imageSrc, index, delay }: {
  name: string; category: string; imageSrc: string; index: number; delay: number;
}) {
  const { ref, isVisible } = useInView<HTMLElement>(0.08);
  return (
    <figure
      ref={ref}
      className={`speisekarte__card speisekarte__card--${index + 1} fade-up${isVisible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {imageSrc && <img src={imageSrc} alt={name} className="speisekarte__card-img" />}
      <div className="speisekarte__card-text">
        <span className="speisekarte__card-category">{category}</span>
        <figcaption className="speisekarte__card-name">{name}</figcaption>
      </div>
    </figure>
  );
}

function OverviewRow({ label, items, delay }: { label: string; items: string; delay: number }) {
  const { ref, isVisible } = useInView<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      className={`speisekarte__overview-row fade-up${isVisible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="speisekarte__overview-label">{label}</span>
      <p className="speisekarte__overview-items">{items}</p>
    </div>
  );
}

export function Speisekarte() {
  const { ref: headRef, isVisible: headVisible } = useInView<HTMLHeadingElement>(0.2);
  const { ref: overviewHeadRef, isVisible: overviewHeadVisible } = useInView<HTMLHeadingElement>(0.1);

  return (
    <Layout>
      <div className="speisekarte">
        <div className="speisekarte__inner">

          <header className="speisekarte__header">
            <h1
              ref={headRef}
              className={`speisekarte__heading fade-up${headVisible ? ' is-visible' : ''}`}
            >
              Menü
            </h1>
          </header>

          {/* Bento-Grid */}
          <div className="speisekarte__grid">
            {highlights.map((item, i) => (
              <HighlightCard
                key={item.id}
                name={item.name}
                category={item.category}
                imageSrc={item.imageSrc}
                index={i}
                delay={i * 60}
              />
            ))}
          </div>

          {/* Übersicht */}
          <div className="speisekarte__overview-section">
            <h2
              ref={overviewHeadRef}
              className={`speisekarte__overview-heading fade-up${overviewHeadVisible ? ' is-visible' : ''}`}
            >
              Im Überblick
            </h2>
            <div className="speisekarte__overview">
              {overview.map((row, i) => (
                <OverviewRow
                  key={row.label}
                  label={row.label}
                  items={row.items}
                  delay={i * 60}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
