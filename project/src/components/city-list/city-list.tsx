import {useAppDispatch, useAppSelector} from '../../hooks';
import { filterOffers, сityChoice } from '../../store/action';
import {cities} from '../../const';

function CityList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city.nameCity}>
              <a className={`locations__item-link tabs__item ${currentCity.nameCity === city.nameCity ? 'tabs__item--active' : ''}`}
                onClick={() => {dispatch(сityChoice({currentCity: city})); dispatch(filterOffers());}}
              >
                <span>{city.nameCity}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityList;


