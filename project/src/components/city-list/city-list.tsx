import {useAppDispatch, useAppSelector} from '../../hooks';
import {cities} from '../../cities';
import { getCity } from '../../store/offers-data/selectors';
import { сityChoice } from '../../store/offers-data/offers-data';
import { memo } from 'react';

function CityList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city.name}>
              <a className={`locations__item-link tabs__item ${currentCity.name === city.name ? 'tabs__item--active' : ''}`}
                onClick={() => {dispatch(сityChoice({currentCity: city}));}}
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

export default memo(CityList);
