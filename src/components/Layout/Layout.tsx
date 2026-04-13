import { ReactNode } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer';
import './Layout.css';

type Props = {
  children: ReactNode;
  fullHeight?: boolean;
  noFooter?: boolean;
};

export function Layout({ children, fullHeight = false, noFooter = false }: Props) {
  return (
    <div className={`layout${fullHeight ? ' layout--full-height' : ''}`}>
      <Navigation />
      <main className="layout__main">
        {children}
      </main>
      {!noFooter && <Footer />}
    </div>
  );
}
