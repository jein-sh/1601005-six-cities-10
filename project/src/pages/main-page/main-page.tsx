import {useAppSelector} from '../../hooks';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import {Offer} from '../../types/offer';
import { useState } from 'react';
import CityList from '../../components/city-list/city-list';
import SortList from '../../components/sort-list/sort-list';

function MainPage(): JSX.Element {

  const {city, offers} = useAppSelector((state) => state);

  const [currentOffer, setCurrentOffer] = useState<Offer | undefined>(undefined);

  const updateCurrentOffer = (offer : Offer | undefined) => {
    setCurrentOffer(offer);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <CityList />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${offers.length} places to stay in ${city.nameCity}`}</b>

              <SortList />

              <OfferList offers= {offers} cardMods= {'cities'} updateCurrentOffer={updateCurrentOffer} />

            </section>
            <div className="cities__right-section">
              <section className="cities__map map">

                <Map offers= {offers} currentOffer={currentOffer} mapMods = {'main'} />

              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
