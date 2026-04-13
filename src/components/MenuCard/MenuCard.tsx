import { useInView } from '../../hooks/useInView';
import { IngredientCallout } from '../IngredientCallout/IngredientCallout';
import type { MenuItem } from '../../data/menu';
import './MenuCard.css';

type Props = {
  item: MenuItem;
  index?: number;
};

function formatPrice(price: number) {
  return price.toFixed(2).replace('.', ',');
}

export function MenuCard({ item, index = 0 }: Props) {
  const { ref, isVisible } = useInView(0.1);
  const delay = Math.min(index % 4, 4);

  if (item.isSignature && item.callouts) {
    return (
      <article
        ref={ref}
        className={`menu-card menu-card--signature fade-up${isVisible ? ' is-visible' : ''}`}
        data-delay={delay > 0 ? String(delay) : undefined}
      >
        <IngredientCallout
          imageSrc={item.imageSrc}
          name={item.name}
          callouts={item.callouts}
          isVisible={isVisible}
        />
        <div className="menu-card__info">
          <h3 className="menu-card__name menu-card__name--serif">{item.name}</h3>
          <span className="menu-card__price">{formatPrice(item.price)}</span>
        </div>
      </article>
    );
  }

  return (
    <article
      ref={ref}
      className={`menu-card fade-up${isVisible ? ' is-visible' : ''}`}
      data-delay={delay > 0 ? String(delay) : undefined}
    >
      <div className="menu-card__info">
        <h3 className="menu-card__name">{item.name}</h3>
        <span className="menu-card__price">{formatPrice(item.price)}</span>
      </div>
    </article>
  );
}
