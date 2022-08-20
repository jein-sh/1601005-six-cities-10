import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { fetchCommentsAction, fetchCurrentOfferAction, fetchNearbyOffersAction } from '../../store/api-actions';
import {Offer} from '../../types/offer';
import BookmarkButton from '../bookmark-button/bookmark-button';

type PlaceCardProps = {
  offer: Offer;
  updateCurrentOffer?: (offer: Offer | undefined)=> void;
  cardMods: string;
}

function PlaceCard({offer, updateCurrentOffer, cardMods}: PlaceCardProps): JSX.Element {

  const {id, price, title, ratingFull, type, previewImage, isPremium, isFavorite} = offer;
  const starsFull = String(ratingFull * 100 / 5);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickCardHandle = () => {
    dispatch(fetchCurrentOfferAction(id));
    dispatch(fetchNearbyOffersAction(id));
    dispatch(fetchCommentsAction(id));
    navigate(`/offer/${id}`);
  };

  const onCardMouseMove = () => {
    if (updateCurrentOffer) {
      updateCurrentOffer(offer);
    }
  };

  return (
    <article className={`${cardMods}__card place-card`} onMouseMove={onCardMouseMove}>

      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}

      <div className={`${cardMods}__image-wrapper place-card__image-wrapper`}>
        <a href="#todo">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className={`place-card__info ${cardMods === 'favorites' ? 'favorites__card-info' : ''}`} >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkButton favorite = {isFavorite} id = {id} btnMods = {'place-card'}/>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${starsFull}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a onClick = {onClickCardHandle}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
