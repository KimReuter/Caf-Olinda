export type MenuCategory =
  | 'heiss'
  | 'cold-kaffee'
  | 'kaltgetraenke'
  | 'suesses-gebaeck'
  | 'herzhaftes-gebaeck'
  | 'belegte-waren';

export type MenuItem = {
  id: string;
  name: string;
  price: number;       // Basispreis (kleinste Größe)
  priceAlt?: number;   // Alternativpreis (größere Größe), optional
  category: MenuCategory;
  imageSrc?: string;
};

export const categoryLabels: Record<MenuCategory, string> = {
  'heiss':             'Heiß',
  'cold-kaffee':       'Cold Coffee',
  'kaltgetraenke':     'Kalt',
  'suesses-gebaeck':   'Süßes Gebäck',
  'herzhaftes-gebaeck':'Herzhaftes Gebäck',
  'belegte-waren':     'Bagels',
};

export const menuItems: MenuItem[] = [

  // ── Heiße Getränke ────────────────────────────────────
  { id: 'espresso',        name: 'Espresso',        price: 2.10, category: 'heiss' },
  { id: 'doppio',          name: 'Doppio',           price: 3.20, category: 'heiss' },
  { id: 'americano',       name: 'Americano',        price: 3.20, category: 'heiss' },
  { id: 'latte-macchiato', name: 'Latte Macchiato',  price: 3.50, priceAlt: 4.40, category: 'heiss' },
  { id: 'cappuccino',      name: 'Cappuccino',       price: 3.50, priceAlt: 4.40, category: 'heiss' },
  { id: 'milchkaffee',     name: 'Milchkaffee',      price: 4.40, category: 'heiss' },
  { id: 'cafe-bon-bon',    name: 'Café Bon Bon',     price: 3.20, category: 'heiss' },
  { id: 'chai-latte',      name: 'Chai Latte',       price: 3.50, priceAlt: 4.40, category: 'heiss' },
  { id: 'tee',             name: 'Tee',              price: 3.50, category: 'heiss' },
  { id: 'schokolade',      name: 'Schokolade',       price: 3.00, priceAlt: 4.40, category: 'heiss' },

  // ── Cold Coffee ───────────────────────────────────────
  { id: 'coldbrew',               name: 'Five Elephants Kenia Coldbrew', price: 3.60, category: 'cold-kaffee' },
  { id: 'ice-americano',          name: 'Ice Americano',                 price: 3.10, category: 'cold-kaffee' },
  { id: 'ice-americano-tonic',    name: 'Ice Americano + Tonic',         price: 4.40, category: 'cold-kaffee' },
  { id: 'ice-latte',              name: 'Ice Latte',                     price: 3.50, priceAlt: 4.40, category: 'cold-kaffee' },

  // ── Kaltgetränke ──────────────────────────────────────
  { id: 'mineralwasser',   name: 'Mineralwasser',                  price: 2.50, category: 'kaltgetraenke' },
  { id: 'gua-limo',        name: 'Gua Limo',                       price: 3.50, category: 'kaltgetraenke' },
  { id: 'fritz-cola',      name: 'Fritz Cola',                     price: 2.90, category: 'kaltgetraenke' },
  { id: 'saft-saisonal',   name: 'Frisch gepresster Saft saisonal', price: 3.50, priceAlt: 4.50, category: 'kaltgetraenke' },
  { id: 'saft-brasilien',  name: 'Brasilianischer Saft Guave oder Açaí', price: 4.90, category: 'kaltgetraenke' },

  // ── Süßes Gebäck ──────────────────────────────────────
  { id: 'mascarpone-maracuja', name: 'Mascarpone-Maracuja-Kuchen', price: 4.50, category: 'suesses-gebaeck' },
  { id: 'pastel-de-nata',      name: 'Pastel de Nata',             price: 2.80, category: 'suesses-gebaeck' },
  { id: 'pao-de-mel',          name: 'Pão de Mel',                 price: 3.20, category: 'suesses-gebaeck' },
  { id: 'croissant',           name: 'Schokocroissant',            price: 2.50, category: 'suesses-gebaeck' },

  // ── Herzhaftes Gebäck ─────────────────────────────────
  { id: 'kaese-empanada',  name: 'Käse-Empanada',  price: 3.80, category: 'herzhaftes-gebaeck' },
  { id: 'bolinhas-fritas', name: 'Bolinhas fritas', price: 3.50, category: 'herzhaftes-gebaeck' },
  { id: 'coxinha',         name: 'Coxinha de Soja', price: 3.50, category: 'herzhaftes-gebaeck' },

  // ── Belegte Waren ─────────────────────────────────────
  { id: 'bagel-raeuchertofu', name: 'Bagel mit Räuchertofu, Aubergine & Avocado', price: 6.50, category: 'belegte-waren' },
  { id: 'bagel-frischkaese',  name: 'Bagel mit Frischkäse',                       price: 5.80, category: 'belegte-waren' },
];

export const categoryOrder: MenuCategory[] = [
  'heiss',
  'cold-kaffee',
  'kaltgetraenke',
  'suesses-gebaeck',
  'herzhaftes-gebaeck',
  'belegte-waren',
];
