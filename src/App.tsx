import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { DasCafe } from './pages/DasCafe';
import { Speisekarte } from './pages/Speisekarte';
import { Kontakt } from './pages/Kontakt';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/das-cafe" element={<DasCafe />} />
        <Route path="/menu" element={<Speisekarte />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </BrowserRouter>
  );
}
