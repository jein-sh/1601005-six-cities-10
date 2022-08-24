import {useAppSelector} from '../../hooks';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import {Offer} from '../../types/offer';
import { useState } from 'react';
import CityList from '../../components/city-list/city-list';
import SortList from '../../components/sort-list/sort-list';
import Header from '../../components/header/header';
import { filteredOffers, getCity } from '../../store/offers-data/selectors';
import { SortType } from '../../const';
import { sortHigtToLow, sortLowToHigt, sortRating } from '../../untils';

function MainPage(): JSX.Element {
  const city = useAppSelector(getCity);
  const offers = useAppSelector(filteredOffers);

  const isMainEmpty = offers.length === 0 ;

  let sortedOffers = offers;

  const [currentOffer, setCurrentOffer] = useState<Offer | undefined>(undefined);
  const [sortType, setSortType] = useState<string>(SortType.Popular);

  const updateCurrentOffer = (offer : Offer | undefined) => {
    setCurrentOffer(offer);
  };

  const updateSortType = (sort: string) => {
    setSortType(sort);
  };

  switch (sortType) {
    case SortType.LowToHigh:
      sortedOffers = offers.sort(sortLowToHigt);
      break;
    case SortType.HighToLow:
      sortedOffers = offers.sort(sortHigtToLow);
      break;
    case SortType.TopRatedFirst:
      sortedOffers = offers.sort(sortRating);
      break;
  }

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <CityList />

        <div className="cities">
          <div className={`cities__places-container container ${isMainEmpty ? 'cities__places-container--empty' : ''}`}>
            { isMainEmpty ?
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">{`We could not find any property available at the moment in ${city.name}`}</p>
                </div>
              </section>
              :
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${offers.length} places to stay in ${city.name}`}</b>

                <SortList sortType={sortType} updateSortType={updateSortType}/>

                <OfferList offers= {sortedOffers} cardMods= {'cities'} updateCurrentOffer={updateCurrentOffer} />

              </section> }

            <div className="cities__right-section">
              { !isMainEmpty ?
                <section className="cities__map map">

                  <Map offers= {offers} currentOffer={currentOffer} mapMods = {'main'} />

                </section> :
                null }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
