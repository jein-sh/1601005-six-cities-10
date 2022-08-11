import {createReducer} from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT, SortType} from '../const';
import { offers } from '../mocks/offers';
import { getFilterOffers, sortLowToHigt, sortHigtToLow, sortRating } from '../untils';
import {filterOffers, sortChoice, sortOffers, сityChoice} from './action';

const initialState = {
  city: DEFAULT_CITY,
  sort: DEFAULT_SORT,
  offers: getFilterOffers(offers, DEFAULT_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(сityChoice, (state, action) => {
      const {currentCity} = action.payload;
      state.city = currentCity;
    })
    .addCase(filterOffers, (state) => {
      state.offers = getFilterOffers(offers, state.city);
    })
    .addCase(sortChoice, (state, action) => {
      const {currentSort} = action.payload;
      state.sort = currentSort;
    })
    .addCase(sortOffers, (state) => {
      switch (state.sort) {
        case SortType.Popular:
          state.offers = getFilterOffers(offers, state.city);
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
          state.offers = getFilterOffers(offers, state.city);
      }
    });
});

export {reducer};
