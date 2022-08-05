import FormComment from '../../components/form-comment/form-comment';
import {Offer, Offers} from '../../types/offer';
import {Reviews} from '../../types/review';
import {useParams} from 'react-router-dom';
import ErrorPage from '../error-page/error-page';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';
import { city } from '../../mocks/city';

type RoomPageProps = {
  offers: Offers;
  reviews: Reviews;
}

function RoomPage({offers, reviews}: RoomPageProps): JSX.Element {
  const params = useParams();
  const offer: Offer | undefined = offers.find((item) => item.id.toString() === params.id);

  const nearOffers = offers.slice(0,3);

  if (!offer) {
    return <ErrorPage />;
  }

  const {price, title, ratingFull, images, isPremium, goods, bedrooms, maxAdults, description, type, host: {nameHost, isPro, avatarUrl}} = offer;
  const starsFull = String(ratingFull * 100 / 5);
  const premium = isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null;
  const pro = isPro ? <span className="property__user-status"></span> : null;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((image) =>(
              <div key={image} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Photo studio" />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {premium}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${starsFull}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{ratingFull}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((item)=>(
                  <li key={item} className="property__inside-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {nameHost}
                </span>

                {pro}

              </div>
              <div className="property__description">
                <p className="reviews__text">{description}</p>
              </div>
            </div>
            <section className="property__reviews reviews">

              <ReviewsList reviews={reviews} />

              <FormComment />

            </section>
          </div>
        </div>
        <section className="property__map map">

          <Map city= {city} offers= {nearOffers} currentOffer={undefined} mapMods = {'big'} />

        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>

          <OfferList offers={nearOffers} cardMods={'near-places'} updateCurrentOffer={() => (undefined)}/>

        </section>
      </div>
    </main>
  );
}

export default RoomPage;
