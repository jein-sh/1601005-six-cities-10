import { createSelector } from 'reselect';
import {NameSpace} from '../../const';
import { City } from '../../types/city';
import { Offers } from '../../types/offer';
import {State} from '../../types/state';
import { getFilterOffers } from '../../untils';

export const getAllOffers = (state: State): Offers => state[NameSpace.Data].allOffers;
export const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getCity = (state: State): City => state[NameSpace.Data].city;
export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;

export const filteredOffers = createSelector(
  [getAllOffers, getCity],
  (allOffers, city) => getFilterOffers(allOffers, city)
);
