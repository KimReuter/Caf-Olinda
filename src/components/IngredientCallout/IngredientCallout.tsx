import { useEffect, useRef, useState } from 'react';
import type { CalloutPoint } from '../../data/menu';
import './IngredientCallout.css';

type Props = {
  imageSrc?: string;
  name: string;
  callouts: CalloutPoint[];
  isVisible: boolean;
};

export function IngredientCallout({ imageSrc, name, callouts, isVisible }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [linesReady, setLinesReady] = useState(false);
  const [labelsReady, setLabelsReady] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    // Linien starten nach kurzer Verzögerung
    const t1 = setTimeout(() => setLinesReady(true), 200);
    // Labels erscheinen nach Linien
    const t2 = setTimeout(() => setLabelsReady(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isVisible]);

  return (
    <div className="callout">
      <div className="callout__stage">
        {/* Produktbild oder Platzhalter */}
        <div className="callout__image-wrap">
          {imageSrc ? (
            <img src={imageSrc} alt={name} className="callout__image" />
          ) : (
            <div className="callout__placeholder" aria-hidden="true" />
          )}
        </div>

        {/* SVG-Linien und -Labels */}
        <svg
          ref={svgRef}
          className="callout__svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {callouts.map((pt, i) => {
            const length = Math.sqrt(
              Math.pow(pt.toX - pt.fromX, 2) + Math.pow(pt.toY - pt.fromY, 2)
            );
            const delay = i * 120;

            return (
              <line
                key={pt.label}
                className={`callout__line${linesReady ? ' callout__line--visible' : ''}`}
                x1={pt.fromX}
                y1={pt.fromY}
                x2={pt.toX}
                y2={pt.toY}
                stroke="var(--color-accent)"
                strokeWidth="0.4"
                strokeLinecap="round"
                strokeDasharray={length}
                strokeDashoffset={linesReady ? 0 : length}
                style={{
                  transition: `stroke-dashoffset 600ms var(--ease-quiet) ${delay}ms`,
                }}
              />
            );
          })}

          {/* Endpunkt-Dots */}
          {callouts.map((pt, i) => (
            <circle
              key={`dot-${pt.label}`}
              cx={pt.toX}
              cy={pt.toY}
              r="0.8"
              fill="var(--color-accent)"
              style={{
                opacity: linesReady ? 1 : 0,
                transition: `opacity 300ms var(--ease-quiet) ${i * 120 + 500}ms`,
              }}
            />
          ))}
        </svg>

        {/* Labels – als HTML über dem SVG */}
        {callouts.map((pt, i) => {
          const isRight = pt.toX > 50;
          const isBottom = pt.toY > 50;

          return (
            <span
              key={`label-${pt.label}`}
              className={`callout__label${labelsReady ? ' callout__label--visible' : ''}`}
              style={{
                left: `${pt.toX}%`,
                top: `${pt.toY}%`,
                transform: `translate(${isRight ? '4px' : 'calc(-100% - 4px)'}, ${isBottom ? '0' : '-100%'})`,
                transitionDelay: `${i * 120}ms`,
              }}
            >
              {pt.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
