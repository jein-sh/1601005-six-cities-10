import { Link } from 'react-router-dom';
import {Offer} from '../../types/offer';

type PlaceCardProps = {
  offer: Offer;
  isActive: boolean;
  onCardMouseMove: ()=> void;
  cardMods: string;
}

function PlaceCard({offer, isActive, onCardMouseMove, cardMods}: PlaceCardProps): JSX.Element {

  const {id, price, title, ratingFull, type, previewImage, isPremium} = offer;
  const starsFull = String(ratingFull * 100 / 5);
  const premium = isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null;
  const articleClass = `${cardMods}__card plase-card`;
  const imageClass = `${cardMods}__image-wrapper place-card__image-wrapper`;
  const infoClass = cardMods === 'favorites' ? 'favorites__card-info place-card__info' : 'place-card__info';

  return (
    <article className={articleClass} onMouseMove={onCardMouseMove}>

      {premium}

      <div className={imageClass}>
        <a href="#todo">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className={infoClass}>
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
          <Link to = {`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
