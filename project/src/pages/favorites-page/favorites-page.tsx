import OfferList from '../../components/offer-list/offer-list';
import {Offers} from '../../types/offer';

type FavoritesPageProps = {
  offers: Offers;
}

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  const favoritesOffers = offers.slice(1,4);
  return (
    <main className="page__main page__main--favorites">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#todo">
                  <span>Amsterdam</span>
                </a>
              </div>
            </div>

            <OfferList offers={favoritesOffers} cardMods={'favorites'} />

          </li>
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#todo">
                  <span>Cologne</span>
                </a>
              </div>
            </div>

            <OfferList offers={favoritesOffers} cardMods={'favorites'} />

          </li>
        </ul>
      </section>
    </main>
  );
}

export default FavoritesPage;
