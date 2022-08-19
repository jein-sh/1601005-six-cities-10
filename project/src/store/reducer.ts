import {createReducer} from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../cities';
import { DEFAULT_SORT, SortType} from '../const';
import { City } from '../types/city';
import { Offers } from '../types/offer';
import { getFilterOffers, sortLowToHigt, sortHigtToLow, sortRating } from '../untils';
import {filterOffers, loadOffers, setDataLoadedStatus, sortChoice, sortOffers, сityChoice} from './action';

type InitalState = {
  city: City,
  sort: string,
  isDataLoaded: boolean,
  allOffers: Offers,
  offers: Offers,
}

const initialState : InitalState = {
  city: DEFAULT_CITY,
  sort: DEFAULT_SORT,
  isDataLoaded: true,
  allOffers: [],
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
      state.isDataLoaded = true;
      state.offers = getFilterOffers(state.allOffers, DEFAULT_CITY);
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(сityChoice, (state, action) => {
      const {currentCity} = action.payload;
      state.city = currentCity;
    })
    .addCase(filterOffers, (state) => {
      state.offers = getFilterOffers(state.allOffers, state.city);
    })
    .addCase(sortChoice, (state, action) => {
      const {currentSort} = action.payload;
      state.sort = currentSort;
    })
    .addCase(sortOffers, (state) => {
      switch (state.sort) {
        case SortType.Popular:
          state.offers = getFilterOffers(state.offers, state.city);
          break;
        case SortType.LowToHigh:
          state.offers = state.offers.sort(sortLowToHigt);
          break;
        case SortType.HighToLow:
          state.offers = state.offers.sort(sortHigtToLow);
          break;
        case SortType.TopRatedFirst:
          state.offers = state.offers.sort(sortRating);
          break;
        default:
          state.offers = getFilterOffers(state.offers, state.city);
      }
    });
});

export {reducer};
