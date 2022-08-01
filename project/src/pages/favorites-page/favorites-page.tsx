import FavoritesCard from '../../components/favorites-card/favorites-card';
import {Offers} from '../../types/offer';

type FavoritesPageProps = {
  offers: Offers;
}

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
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
            <div className="favorites__places">
              {offers.slice(0,2).map((offer) => {
                const keyValue = offer.id;
                return (
                  <FavoritesCard key={keyValue} offer= {offer} />
                );
              })}
            </div>
          </li>
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#todo">
                  <span>Cologne</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offers.slice(3,4).map((offer) => {
                const keyValue = offer.id;
                return (
                  <FavoritesCard key={keyValue} offer= {offer} />
                );
              })}
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default FavoritesPage;
