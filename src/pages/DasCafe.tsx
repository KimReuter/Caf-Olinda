import { Layout } from '../components/Layout/Layout';
import { useInView } from '../hooks/useInView';
import './DasCafe.css';

function TextLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useInView<HTMLSpanElement>(0.2);
  return (
    <span
      ref={ref}
      className={`das-cafe__line fade-up${isVisible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </span>
  );
}

export function DasCafe() {
  const { ref: headRef, isVisible: headVisible } = useInView<HTMLHeadingElement>(0.2);
  const { ref: dividerRef, isVisible: dividerVisible } = useInView<HTMLDivElement>(0.2);

  return (
    <Layout>
      <div className="das-cafe">
        <div className="das-cafe__inner">
          <header className="das-cafe__header">
            <h1
              ref={headRef}
              className={`das-cafe__heading fade-up${headVisible ? ' is-visible' : ''}`}
            >
              Das Café
            </h1>
            <div
              ref={dividerRef}
              className={`das-cafe__divider fade-in${dividerVisible ? ' is-visible' : ''}`}
              aria-hidden="true"
            />
          </header>

          <div className="das-cafe__text">
            <TextLine delay={0}>
              Zwanzig Plätze, manchmal weniger.
            </TextLine>
            <TextLine delay={120}>
              Ein Kaffee, der Zeit hat.
            </TextLine>
            <TextLine delay={240}>
              Das Café ist ein kleiner Ort in Plauen – entstanden aus zwei Welten,{' '}
              irgendwo zwischen Berlin und Olinda.
            </TextLine>
            <TextLine delay={360}>
              Eine kleine, kuratierte Auswahl. Frisch gemacht. Ohne Versprechen.
            </TextLine>
            <TextLine delay={480}>
              Wer etwas Ruhiges sucht, findet es hier.
            </TextLine>
          </div>
        </div>
      </div>
    </Layout>
  );
}
