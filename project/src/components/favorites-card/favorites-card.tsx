import {Offer} from '../../types/offer';

type FavoritesCardProps = {
  offer: Offer;
}

function FavoritesCard({offer}: FavoritesCardProps): JSX.Element {

  const {price, name, ratingFull, type, images, isPremium} = offer;
  const starsFull = String(ratingFull * 100 / 5);
  const premium = isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null;

  return (
    <article className="favorites__card place-card">

      {premium}

      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
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
            <span style={{width: `${starsFull}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#todo">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
