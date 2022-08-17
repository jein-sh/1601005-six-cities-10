import {useAppDispatch, useAppSelector} from '../../hooks';
import { filterOffers, сityChoice } from '../../store/action';
import {cities} from '../../cities';

function CityList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city.name}>
              <a className={`locations__item-link tabs__item ${currentCity.name === city.name ? 'tabs__item--active' : ''}`}
                onClick={() => {dispatch(сityChoice({currentCity: city})); dispatch(filterOffers());}}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityList;


