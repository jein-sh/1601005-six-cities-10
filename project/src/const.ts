import { Cities } from './types/city';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const DEFAULT_SORT = 'Popular';

export enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

export const DEFAULT_CITY = {
  location: {
    latitude:  48.8534100,
    longitude: 2.3488000,
    zoom: 10,
  },
  nameCity: 'Paris',
};

export const cities: Cities = [
  {
    location: {
      latitude:  48.8534100,
      longitude: 2.3488000,
      zoom: 10,
    },
    nameCity: 'Paris',
  },
  {
    location: {
      latitude: 50.9333300,
      longitude: 6.9500000,
      zoom: 10,
    },
    nameCity: 'Cologne',
  },
  {
    location: {
      latitude: 50.8504500,
      longitude: 4.3487800,
      zoom: 10,
    },
    nameCity: 'Brussels',
  },
  {
    location: {
      latitude:  52.3740300,
      longitude: 4.8896900,
      zoom: 10,
    },
    nameCity: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.5753200,
      longitude: 10.0153400,
      zoom: 10,
    },
    nameCity: 'Humburg',
  },
  {
    location: {
      latitude: 51.2217200,
      longitude: 6.7761600,
      zoom: 10,
    },
    nameCity: 'Dusseldorf',
  }
];
