import { Link } from 'react-router-dom';
import { OfferPreview } from '../../types/preview.type';
import { getRatingWidth } from '../../utils';
import { useState } from 'react';

type CardImageSize = 'small' | 'large';

type CardProps = {
  offer: OfferPreview;
  block: string;
  size?: CardImageSize;
};

const sizeMap: Record<CardImageSize, {width: string; height: string}> = {
  small: { width: '150', height: '110' },
  large: { width: '260', height: '200' },
};

function PlaceCard({ offer, block, size = 'large' }: CardProps): JSX.Element {
  const { id, isPremium, previewImage, price, rating, title, type } = offer;
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <article
      className={`${block}__card place-card`}
      onMouseEnter={() => setActiveCard(id)}
      onMouseLeave={() => setActiveCard(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to='/'>
          <img
            className="place-card__image"
            src={previewImage}
            alt={title}
            {...sizeMap[size]}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: getRatingWidth(rating)
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
