import {createReducer} from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../cities';
import { AuthorizationStatus, DEFAULT_SORT, SortType} from '../const';
import { City } from '../types/city';
import { Offer, Offers } from '../types/offer';
import { Reviews } from '../types/review';
import { getFilterOffers, sortLowToHigt, sortHigtToLow, sortRating, sortDate } from '../untils';
import {filterOffers, loadComments, loadFavorite, loadOffers, requireAuthorization, setCurrentOffer, setDataLoadedStatus, setNearbyOffers, setUserMail, sortChoice, sortOffers, сityChoice} from './action';

type InitalState = {
  city: City,
  sort: string,
  isDataLoaded: boolean,
  allOffers: Offers,
  favorite: Offers,
  offers: Offers,
  authorizationStatus: AuthorizationStatus,
  userMail?: string | null,
  currentOffer?: Offer,
  nearbyOffers: Offers,
  comments: Reviews,
}

const initialState : InitalState = {
  city: DEFAULT_CITY,
  sort: DEFAULT_SORT,
  isDataLoaded: true,
  allOffers: [],
  favorite: [],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userMail: null,
  nearbyOffers: [],
  comments: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
      state.isDataLoaded = false;
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserMail, (state, action) => {
      state.userMail = action.payload;
    })
    .addCase(loadFavorite, (state, action) => {
      state.favorite = action.payload;
      state.isDataLoaded = false;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload.sort(sortDate);
    });
});

export {reducer};
