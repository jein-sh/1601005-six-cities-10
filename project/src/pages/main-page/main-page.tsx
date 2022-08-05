import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import {City, Offer, Offers} from '../../types/offer';
import { useState } from 'react';

type MainPageProps = {
  offers: Offers;
  city: City;
}

function MainPage({offers, city}: MainPageProps): JSX.Element {

  const [currentOffer, setCurrentOffer] = useState<Offer | undefined>(undefined);

  const updateCurrentOffer = (offer : Offer | undefined) => {
    setCurrentOffer(offer);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#todo">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#todo">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#todo">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active" href="#todo">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#todo">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#todo">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <OfferList offers= {offers} cardMods= {'cities'} updateCurrentOffer={updateCurrentOffer} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city= {city} offers= {offers} currentOffer={currentOffer} mapMods = {'main'} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
