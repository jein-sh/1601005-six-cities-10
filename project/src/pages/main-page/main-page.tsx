import {useAppSelector} from '../../hooks';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import {Offer} from '../../types/offer';
import { useState } from 'react';
import CityList from '../../components/city-list/city-list';
import SortList from '../../components/sort-list/sort-list';
import Header from '../../components/header/header';

function MainPage(): JSX.Element {

  const {city, offers} = useAppSelector((state) => state);

  const [currentOffer, setCurrentOffer] = useState<Offer | undefined>(undefined);

  const updateCurrentOffer = (offer : Offer | undefined) => {
    setCurrentOffer(offer);
  };

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <CityList />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${offers.length} places to stay in ${city.name}`}</b>

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
